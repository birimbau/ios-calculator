import app from '../app';
import request from 'supertest';

describe('Calculator', () => {
    it('Calculates a sum operation', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 3,
            operator: '+',
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            result: 6
        })
    });

    it('Calculates a difference operation', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 3,
            operator: '-',
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            result: 0
        })
    });

    it('Calculates a multiplication operation', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 3,
            operator: '×',
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            result: 9
        })
    });
    
    it('Calculates a division operation', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 3,
            operator: '÷',
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            result: 1
        });
    });
    
    it('Should not allow division by zero', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 0,
            operator: '÷',
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(400);
    });
    
    it('Operator is mandatory', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 1,
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(400);
    });
    
    it('Previous number is mandatory', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 1,
            operator: '÷',
        });

        expect(res.statusCode).toEqual(400);
    });
    
    it('Next number is mandatory', async () => {
        const res = await request(app).post('/calculator').send({
            operator: '÷',
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(400);
    });
    
    it('Previous number must be numeric', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 0,
            operator: '÷',
            prevNumber: 'a',
        });

        expect(res.statusCode).toEqual(400);
    });
    
    it('Next number must be numeric', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 'a',
            operator: '÷',
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(400);
    });
    
    it('Operation must be valid', async () => {
        const res = await request(app).post('/calculator').send({
            nextNumber: 1,
            operator: 'a',
            prevNumber: 3,
        });

        expect(res.statusCode).toEqual(400);
    });
});
