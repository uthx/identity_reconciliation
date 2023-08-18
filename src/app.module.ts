import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './orm.config';
import {ConfigModule} from '@nestjs/config';
import { IdentityModule } from './identity/identity.module';
import EnvConfiguration from './config/env.configuration';
import EnvValidation from './config/env.validation';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
      validate: EnvValidation
    }),
    IdentityModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
