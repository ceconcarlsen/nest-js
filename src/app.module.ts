import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

@Module({
  imports: [
    NinjasModule,
    UsersModule,
    MongooseModule.forRoot(process.env.DATABASE_KEY),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
