import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {} //pedir via injeção de dependencia

  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      first_name: user.first_name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('Email address or password provided is incorrect!');
  }
}
