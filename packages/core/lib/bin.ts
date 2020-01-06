#!/usr/bin/env node

import { NotaddCliModule } from "./cli.module";
import { platformCli } from "@nger/cli";

platformCli().bootstrapModule(NotaddCliModule)
