import { HttpException } from '@nestjs/common';
export declare type NotFoundResourceTypes = 'User' | 'Member' | 'Distributor' | 'Consumer' | 'Uon' | 'EdgeMeter' | 'Meter' | 'Reserve' | 'Brand' | 'ReserveImage' | 'Admin' | 'UonTransaction' | 'UonBatch';
export declare class NotFoundException extends HttpException {
    constructor(resourceType: NotFoundResourceTypes, debugMessage: string);
}
