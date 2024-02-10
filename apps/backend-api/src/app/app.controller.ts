import { Body, Controller, Post } from '@nestjs/common';
import {
  TsRestHandler,
  nestControllerContract,
  tsRestHandler,
} from '@ts-rest/nest';

import { AppService } from './app.service';
import { appsApi } from '@nxtest/api-contracts';

const c = nestControllerContract(appsApi); 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TsRestHandler(c.createPost)
  getData(@Body() body: unknown) {
    console.dir(body, { depth: 2 });
    console.log(`controller`);
        return tsRestHandler(c.createPost, async ({ body }) => {

          console.log('times??');
          console.dir(body, { depth: 2 });
          return {
            status: 201 as const,
            body: { message: this.appService.getData() },
          };
        });
    
    
  }
}


