
import { Module } from '@nger/core'
import { GraphqlCommand } from './commands/graphql'
import { WebpackModule } from '@nger/webpack';
import { BuildCommand } from './commands/build';

@Module({
    imports: [
        WebpackModule
    ],
    controllers: [
        GraphqlCommand,
        BuildCommand
    ]
})
export class NotaddCliModule { }