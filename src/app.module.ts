import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import dbConfiguration from './config/dbConfiguration';

@Module({
  imports: [
    ConfigModule.forRoot({
      // load: [dbConfiguration],
      // envFilePath: ['.env.development.local', '.env.development'],
      // ignoreEnvFile: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
