#!/usr/bin/env node

import { createPlatform } from '@nger/cli';
import { GraphqlCommand } from './commands/graphql'
createPlatform([GraphqlCommand]).run()