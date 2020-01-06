import { Command, Option, Action } from '@nger/cli';
import { toGraphql } from '@nger/ast.ts-graphql';
import { join, dirname } from 'path';
import { ensureDirSync, writeFileSync } from 'fs-extra';
import { Injector, MAIN_PATH } from '@nger/core';
@Command({
    name: 'graphql'
})
export class GraphqlCommand {
    constructor(public injector: Injector) { }
    @Option({
        alias: 'o'
    })
    output: string = 'notadd.graphql';

    @Action()
    createGraphql() {
        try {
            const root = process.cwd()
            const output = join(root, this.output || 'notadd.graphql');
            ensureDirSync(dirname(output))
            const graphql = toGraphql(this.injector.get<string>(MAIN_PATH, 'main.ts') || 'main.ts');
            writeFileSync(output, graphql)
        } catch (e) {
            console.log(`${e.message}`, e)
        }
    }
}
