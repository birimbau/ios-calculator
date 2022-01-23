import { Request, Response } from 'express';

import { Operation } from '../model/calculator';
import { body } from 'express-validator';
import { operations } from '../utils/utils';

const validate = [
    body('operator', 'operator is mandatory').exists(),
    body('operator', 'operator must be ÷, ×, -, +').custom((value) => ['÷', '×', '-', '+'].includes(value)),
    body('prevNumber', 'prevNumber is mandatory').exists(),
    body('prevNumber', 'prevNumber must be a numeric value').isNumeric(),
    body('nextNumber', 'nextNumber is mandatory').exists(),
    body('nextNumber', 'nextNumber must be a numeric value').isNumeric(),
    body('nextNumber', `Can't divide by zero`).custom((value, { req }) => {
        if (value === 0 && req.body.operator === Operation.DIVISION) {
            return false
        }
        return true
    }),
]


const calculate = async (req: Request, res: Response) => {
    const { operator, prevNumber, nextNumber } = req.body;
    const result = operations(operator, prevNumber, nextNumber);
    return res.status(200).json({result});
};

export default { calculate, validate };