import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('API refactoring', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/users (GET)', async () => {
        // legacy
        const resV1 = await request(app.getHttpServer()).get('/v1/users')
        // new
        const resV2 = await request(app.getHttpServer()).get('/v2/users')

        expect(resV2.body).toEqual(resV1.body)
    });
});
