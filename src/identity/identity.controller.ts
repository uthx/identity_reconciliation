import { Controller, Get } from '@nestjs/common';

@Controller('identity')
export class IdentityController {
    @Get()
    async testGetFuncion() {
        return "Hello identity triggered"
    }
}
