import { HttpException, HttpStatus } from '@nestjs/common';

export type NotFoundResourceTypes =
  | 'User'
  | 'Member'
  | 'Distributor'
  | 'Consumer'
  | 'Uon'
  | 'EdgeMeter'
  | 'Meter'
  | 'Reserve'
  | 'Brand'
  | 'ReserveImage'
  | 'Admin'
  | 'UonTransaction'
  | 'UonBatch';
export class NotFoundException extends HttpException {
  constructor(resourceType: NotFoundResourceTypes, debugMessage: string) {
    super(
      {
        resource: resourceType,
        statusCode: HttpStatus.NOT_FOUND,
        message: debugMessage,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
