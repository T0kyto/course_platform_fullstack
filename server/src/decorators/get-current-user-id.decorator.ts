import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import {JwtPayload} from "../auth/rtStrategy";

export const GetCurrentUserEmail = createParamDecorator(
    (_: undefined, context: ExecutionContext): string => {
        const request = context.switchToHttp().getRequest();
        const user = request.user as JwtPayload;
        return user.email;
    },
);