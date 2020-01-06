import { WebpackService } from '@nger/webpack';
import { Command, Action } from '@nger/cli'
import { Injector, isDevMode } from '@nger/core';
@Command({
    name: 'build'
})
export class BuildCommand {
    constructor(public injector: Injector) { }
    @Action()
    build() {
        const webpack = this.injector.get(WebpackService)
        if (isDevMode()) {
            webpack.watch();
        } else {
            webpack.run();
        }
    }
}