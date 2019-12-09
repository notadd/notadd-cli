English|[简体中文](README_zh.md)


## TODO

[ ] Typescript 

## @notadd/cli
> a simple tool to generate graphql for @nestjs/graphql

##### install

```sh
npm i -g @notadd/cli
```

##### use

```ts
notadd graphql 
    -i main.ts // input file default `main.ts`
    -o notadd.graphql // output file default `notadd.graphql`
```

##### demo.ts and run `notadd graphql`

```ts
import { Resolver, Query } from "@nestjs/graphql";
export interface List<T> {
    data: T[];
    currentPage: number;
    pageSize: number;
    total: number;
}
export interface User {
    username: string;
}
export interface Article {
    title: string;
}
@Resolver()
export class DemoResolver {
    @Query()
    getUser(): List<User> {
        return {} as any;
    }
    @Query()
    getArticles(): List<Article> {
        return {} as any;
    }
}
```

```graphql
type User {
  username: String!
}

type UserList {
  data: [User]!
  currentPage: Int!
  pageSize: Int!
  total: Int!
}

type Article {
  title: String!
}

type ArticleList {
  data: [Article]!
  currentPage: Int!
  pageSize: Int!
  total: Int!
}

type Query {
  getUser: UserList!
  getArticles: ArticleList!
}
```
