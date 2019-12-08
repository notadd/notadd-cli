import { Command, Option, Action } from '@nger/cli';
import { toGraphql } from '@nger/ast.ts-graphql';
import { join, dirname } from 'path';
import { ensureDirSync, writeFileSync } from 'fs-extra';
@Command({
    name: 'graphql'
})
export class GraphqlCommand {
    @Option({
        alias: 'i',
        defaultValue: `main.ts`
    })
    input: string = 'main.ts';
    @Option({
        alias: 'o',
        defaultValue: `notadd.graphql`
    })
    output: string = 'notadd.graphql';
    @Action()
    createGraphql() {
        try {
            const root = process.cwd()
            const output = join(root, this.output);
            ensureDirSync(dirname(output))
            const graphql = toGraphql(join(root, this.input));
            writeFileSync(output, graphql)
        } catch (e) { 
            console.log(`${e.message}`)
        }
    }
}
