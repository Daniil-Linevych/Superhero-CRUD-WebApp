
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Superhero
 * 
 */
export type Superhero = $Result.DefaultSelection<Prisma.$SuperheroPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Superheroes
 * const superheroes = await prisma.superhero.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Superheroes
   * const superheroes = await prisma.superhero.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.superhero`: Exposes CRUD operations for the **Superhero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Superheroes
    * const superheroes = await prisma.superhero.findMany()
    * ```
    */
  get superhero(): Prisma.SuperheroDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Superhero: 'Superhero'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "superhero"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Superhero: {
        payload: Prisma.$SuperheroPayload<ExtArgs>
        fields: Prisma.SuperheroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperheroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperheroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          findFirst: {
            args: Prisma.SuperheroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperheroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          findMany: {
            args: Prisma.SuperheroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>[]
          }
          create: {
            args: Prisma.SuperheroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          createMany: {
            args: Prisma.SuperheroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuperheroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>[]
          }
          delete: {
            args: Prisma.SuperheroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          update: {
            args: Prisma.SuperheroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          deleteMany: {
            args: Prisma.SuperheroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperheroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuperheroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>[]
          }
          upsert: {
            args: Prisma.SuperheroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperheroPayload>
          }
          aggregate: {
            args: Prisma.SuperheroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperhero>
          }
          groupBy: {
            args: Prisma.SuperheroGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperheroGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperheroCountArgs<ExtArgs>
            result: $Utils.Optional<SuperheroCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    superhero?: SuperheroOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Superhero
   */

  export type AggregateSuperhero = {
    _count: SuperheroCountAggregateOutputType | null
    _avg: SuperheroAvgAggregateOutputType | null
    _sum: SuperheroSumAggregateOutputType | null
    _min: SuperheroMinAggregateOutputType | null
    _max: SuperheroMaxAggregateOutputType | null
  }

  export type SuperheroAvgAggregateOutputType = {
    id: number | null
  }

  export type SuperheroSumAggregateOutputType = {
    id: number | null
  }

  export type SuperheroMinAggregateOutputType = {
    id: number | null
    nickname: string | null
    realName: string | null
    originDescription: string | null
    superpowers: string | null
    catchPhrase: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type SuperheroMaxAggregateOutputType = {
    id: number | null
    nickname: string | null
    realName: string | null
    originDescription: string | null
    superpowers: string | null
    catchPhrase: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type SuperheroCountAggregateOutputType = {
    id: number
    nickname: number
    realName: number
    originDescription: number
    superpowers: number
    catchPhrase: number
    images: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type SuperheroAvgAggregateInputType = {
    id?: true
  }

  export type SuperheroSumAggregateInputType = {
    id?: true
  }

  export type SuperheroMinAggregateInputType = {
    id?: true
    nickname?: true
    realName?: true
    originDescription?: true
    superpowers?: true
    catchPhrase?: true
    createdAt?: true
    updateAt?: true
  }

  export type SuperheroMaxAggregateInputType = {
    id?: true
    nickname?: true
    realName?: true
    originDescription?: true
    superpowers?: true
    catchPhrase?: true
    createdAt?: true
    updateAt?: true
  }

  export type SuperheroCountAggregateInputType = {
    id?: true
    nickname?: true
    realName?: true
    originDescription?: true
    superpowers?: true
    catchPhrase?: true
    images?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type SuperheroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Superhero to aggregate.
     */
    where?: SuperheroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Superheroes to fetch.
     */
    orderBy?: SuperheroOrderByWithRelationInput | SuperheroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperheroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Superheroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Superheroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Superheroes
    **/
    _count?: true | SuperheroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuperheroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuperheroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperheroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperheroMaxAggregateInputType
  }

  export type GetSuperheroAggregateType<T extends SuperheroAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperhero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperhero[P]>
      : GetScalarType<T[P], AggregateSuperhero[P]>
  }




  export type SuperheroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperheroWhereInput
    orderBy?: SuperheroOrderByWithAggregationInput | SuperheroOrderByWithAggregationInput[]
    by: SuperheroScalarFieldEnum[] | SuperheroScalarFieldEnum
    having?: SuperheroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperheroCountAggregateInputType | true
    _avg?: SuperheroAvgAggregateInputType
    _sum?: SuperheroSumAggregateInputType
    _min?: SuperheroMinAggregateInputType
    _max?: SuperheroMaxAggregateInputType
  }

  export type SuperheroGroupByOutputType = {
    id: number
    nickname: string
    realName: string
    originDescription: string | null
    superpowers: string | null
    catchPhrase: string | null
    images: string[]
    createdAt: Date
    updateAt: Date
    _count: SuperheroCountAggregateOutputType | null
    _avg: SuperheroAvgAggregateOutputType | null
    _sum: SuperheroSumAggregateOutputType | null
    _min: SuperheroMinAggregateOutputType | null
    _max: SuperheroMaxAggregateOutputType | null
  }

  type GetSuperheroGroupByPayload<T extends SuperheroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperheroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperheroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperheroGroupByOutputType[P]>
            : GetScalarType<T[P], SuperheroGroupByOutputType[P]>
        }
      >
    >


  export type SuperheroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    realName?: boolean
    originDescription?: boolean
    superpowers?: boolean
    catchPhrase?: boolean
    images?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["superhero"]>

  export type SuperheroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    realName?: boolean
    originDescription?: boolean
    superpowers?: boolean
    catchPhrase?: boolean
    images?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["superhero"]>

  export type SuperheroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    realName?: boolean
    originDescription?: boolean
    superpowers?: boolean
    catchPhrase?: boolean
    images?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["superhero"]>

  export type SuperheroSelectScalar = {
    id?: boolean
    nickname?: boolean
    realName?: boolean
    originDescription?: boolean
    superpowers?: boolean
    catchPhrase?: boolean
    images?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type SuperheroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "realName" | "originDescription" | "superpowers" | "catchPhrase" | "images" | "createdAt" | "updateAt", ExtArgs["result"]["superhero"]>

  export type $SuperheroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Superhero"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nickname: string
      realName: string
      originDescription: string | null
      superpowers: string | null
      catchPhrase: string | null
      images: string[]
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["superhero"]>
    composites: {}
  }

  type SuperheroGetPayload<S extends boolean | null | undefined | SuperheroDefaultArgs> = $Result.GetResult<Prisma.$SuperheroPayload, S>

  type SuperheroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperheroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperheroCountAggregateInputType | true
    }

  export interface SuperheroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Superhero'], meta: { name: 'Superhero' } }
    /**
     * Find zero or one Superhero that matches the filter.
     * @param {SuperheroFindUniqueArgs} args - Arguments to find a Superhero
     * @example
     * // Get one Superhero
     * const superhero = await prisma.superhero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperheroFindUniqueArgs>(args: SelectSubset<T, SuperheroFindUniqueArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Superhero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperheroFindUniqueOrThrowArgs} args - Arguments to find a Superhero
     * @example
     * // Get one Superhero
     * const superhero = await prisma.superhero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperheroFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperheroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Superhero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroFindFirstArgs} args - Arguments to find a Superhero
     * @example
     * // Get one Superhero
     * const superhero = await prisma.superhero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperheroFindFirstArgs>(args?: SelectSubset<T, SuperheroFindFirstArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Superhero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroFindFirstOrThrowArgs} args - Arguments to find a Superhero
     * @example
     * // Get one Superhero
     * const superhero = await prisma.superhero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperheroFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperheroFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Superheroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Superheroes
     * const superheroes = await prisma.superhero.findMany()
     * 
     * // Get first 10 Superheroes
     * const superheroes = await prisma.superhero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superheroWithIdOnly = await prisma.superhero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperheroFindManyArgs>(args?: SelectSubset<T, SuperheroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Superhero.
     * @param {SuperheroCreateArgs} args - Arguments to create a Superhero.
     * @example
     * // Create one Superhero
     * const Superhero = await prisma.superhero.create({
     *   data: {
     *     // ... data to create a Superhero
     *   }
     * })
     * 
     */
    create<T extends SuperheroCreateArgs>(args: SelectSubset<T, SuperheroCreateArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Superheroes.
     * @param {SuperheroCreateManyArgs} args - Arguments to create many Superheroes.
     * @example
     * // Create many Superheroes
     * const superhero = await prisma.superhero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperheroCreateManyArgs>(args?: SelectSubset<T, SuperheroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Superheroes and returns the data saved in the database.
     * @param {SuperheroCreateManyAndReturnArgs} args - Arguments to create many Superheroes.
     * @example
     * // Create many Superheroes
     * const superhero = await prisma.superhero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Superheroes and only return the `id`
     * const superheroWithIdOnly = await prisma.superhero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuperheroCreateManyAndReturnArgs>(args?: SelectSubset<T, SuperheroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Superhero.
     * @param {SuperheroDeleteArgs} args - Arguments to delete one Superhero.
     * @example
     * // Delete one Superhero
     * const Superhero = await prisma.superhero.delete({
     *   where: {
     *     // ... filter to delete one Superhero
     *   }
     * })
     * 
     */
    delete<T extends SuperheroDeleteArgs>(args: SelectSubset<T, SuperheroDeleteArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Superhero.
     * @param {SuperheroUpdateArgs} args - Arguments to update one Superhero.
     * @example
     * // Update one Superhero
     * const superhero = await prisma.superhero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperheroUpdateArgs>(args: SelectSubset<T, SuperheroUpdateArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Superheroes.
     * @param {SuperheroDeleteManyArgs} args - Arguments to filter Superheroes to delete.
     * @example
     * // Delete a few Superheroes
     * const { count } = await prisma.superhero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperheroDeleteManyArgs>(args?: SelectSubset<T, SuperheroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Superheroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Superheroes
     * const superhero = await prisma.superhero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperheroUpdateManyArgs>(args: SelectSubset<T, SuperheroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Superheroes and returns the data updated in the database.
     * @param {SuperheroUpdateManyAndReturnArgs} args - Arguments to update many Superheroes.
     * @example
     * // Update many Superheroes
     * const superhero = await prisma.superhero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Superheroes and only return the `id`
     * const superheroWithIdOnly = await prisma.superhero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SuperheroUpdateManyAndReturnArgs>(args: SelectSubset<T, SuperheroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Superhero.
     * @param {SuperheroUpsertArgs} args - Arguments to update or create a Superhero.
     * @example
     * // Update or create a Superhero
     * const superhero = await prisma.superhero.upsert({
     *   create: {
     *     // ... data to create a Superhero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Superhero we want to update
     *   }
     * })
     */
    upsert<T extends SuperheroUpsertArgs>(args: SelectSubset<T, SuperheroUpsertArgs<ExtArgs>>): Prisma__SuperheroClient<$Result.GetResult<Prisma.$SuperheroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Superheroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroCountArgs} args - Arguments to filter Superheroes to count.
     * @example
     * // Count the number of Superheroes
     * const count = await prisma.superhero.count({
     *   where: {
     *     // ... the filter for the Superheroes we want to count
     *   }
     * })
    **/
    count<T extends SuperheroCountArgs>(
      args?: Subset<T, SuperheroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperheroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Superhero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuperheroAggregateArgs>(args: Subset<T, SuperheroAggregateArgs>): Prisma.PrismaPromise<GetSuperheroAggregateType<T>>

    /**
     * Group by Superhero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperheroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SuperheroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperheroGroupByArgs['orderBy'] }
        : { orderBy?: SuperheroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuperheroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperheroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Superhero model
   */
  readonly fields: SuperheroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Superhero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperheroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Superhero model
   */
  interface SuperheroFieldRefs {
    readonly id: FieldRef<"Superhero", 'Int'>
    readonly nickname: FieldRef<"Superhero", 'String'>
    readonly realName: FieldRef<"Superhero", 'String'>
    readonly originDescription: FieldRef<"Superhero", 'String'>
    readonly superpowers: FieldRef<"Superhero", 'String'>
    readonly catchPhrase: FieldRef<"Superhero", 'String'>
    readonly images: FieldRef<"Superhero", 'String[]'>
    readonly createdAt: FieldRef<"Superhero", 'DateTime'>
    readonly updateAt: FieldRef<"Superhero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Superhero findUnique
   */
  export type SuperheroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Filter, which Superhero to fetch.
     */
    where: SuperheroWhereUniqueInput
  }

  /**
   * Superhero findUniqueOrThrow
   */
  export type SuperheroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Filter, which Superhero to fetch.
     */
    where: SuperheroWhereUniqueInput
  }

  /**
   * Superhero findFirst
   */
  export type SuperheroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Filter, which Superhero to fetch.
     */
    where?: SuperheroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Superheroes to fetch.
     */
    orderBy?: SuperheroOrderByWithRelationInput | SuperheroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Superheroes.
     */
    cursor?: SuperheroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Superheroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Superheroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Superheroes.
     */
    distinct?: SuperheroScalarFieldEnum | SuperheroScalarFieldEnum[]
  }

  /**
   * Superhero findFirstOrThrow
   */
  export type SuperheroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Filter, which Superhero to fetch.
     */
    where?: SuperheroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Superheroes to fetch.
     */
    orderBy?: SuperheroOrderByWithRelationInput | SuperheroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Superheroes.
     */
    cursor?: SuperheroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Superheroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Superheroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Superheroes.
     */
    distinct?: SuperheroScalarFieldEnum | SuperheroScalarFieldEnum[]
  }

  /**
   * Superhero findMany
   */
  export type SuperheroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Filter, which Superheroes to fetch.
     */
    where?: SuperheroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Superheroes to fetch.
     */
    orderBy?: SuperheroOrderByWithRelationInput | SuperheroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Superheroes.
     */
    cursor?: SuperheroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Superheroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Superheroes.
     */
    skip?: number
    distinct?: SuperheroScalarFieldEnum | SuperheroScalarFieldEnum[]
  }

  /**
   * Superhero create
   */
  export type SuperheroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * The data needed to create a Superhero.
     */
    data: XOR<SuperheroCreateInput, SuperheroUncheckedCreateInput>
  }

  /**
   * Superhero createMany
   */
  export type SuperheroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Superheroes.
     */
    data: SuperheroCreateManyInput | SuperheroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Superhero createManyAndReturn
   */
  export type SuperheroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * The data used to create many Superheroes.
     */
    data: SuperheroCreateManyInput | SuperheroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Superhero update
   */
  export type SuperheroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * The data needed to update a Superhero.
     */
    data: XOR<SuperheroUpdateInput, SuperheroUncheckedUpdateInput>
    /**
     * Choose, which Superhero to update.
     */
    where: SuperheroWhereUniqueInput
  }

  /**
   * Superhero updateMany
   */
  export type SuperheroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Superheroes.
     */
    data: XOR<SuperheroUpdateManyMutationInput, SuperheroUncheckedUpdateManyInput>
    /**
     * Filter which Superheroes to update
     */
    where?: SuperheroWhereInput
    /**
     * Limit how many Superheroes to update.
     */
    limit?: number
  }

  /**
   * Superhero updateManyAndReturn
   */
  export type SuperheroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * The data used to update Superheroes.
     */
    data: XOR<SuperheroUpdateManyMutationInput, SuperheroUncheckedUpdateManyInput>
    /**
     * Filter which Superheroes to update
     */
    where?: SuperheroWhereInput
    /**
     * Limit how many Superheroes to update.
     */
    limit?: number
  }

  /**
   * Superhero upsert
   */
  export type SuperheroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * The filter to search for the Superhero to update in case it exists.
     */
    where: SuperheroWhereUniqueInput
    /**
     * In case the Superhero found by the `where` argument doesn't exist, create a new Superhero with this data.
     */
    create: XOR<SuperheroCreateInput, SuperheroUncheckedCreateInput>
    /**
     * In case the Superhero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperheroUpdateInput, SuperheroUncheckedUpdateInput>
  }

  /**
   * Superhero delete
   */
  export type SuperheroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
    /**
     * Filter which Superhero to delete.
     */
    where: SuperheroWhereUniqueInput
  }

  /**
   * Superhero deleteMany
   */
  export type SuperheroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Superheroes to delete
     */
    where?: SuperheroWhereInput
    /**
     * Limit how many Superheroes to delete.
     */
    limit?: number
  }

  /**
   * Superhero without action
   */
  export type SuperheroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Superhero
     */
    select?: SuperheroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Superhero
     */
    omit?: SuperheroOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SuperheroScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    realName: 'realName',
    originDescription: 'originDescription',
    superpowers: 'superpowers',
    catchPhrase: 'catchPhrase',
    images: 'images',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type SuperheroScalarFieldEnum = (typeof SuperheroScalarFieldEnum)[keyof typeof SuperheroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SuperheroWhereInput = {
    AND?: SuperheroWhereInput | SuperheroWhereInput[]
    OR?: SuperheroWhereInput[]
    NOT?: SuperheroWhereInput | SuperheroWhereInput[]
    id?: IntFilter<"Superhero"> | number
    nickname?: StringFilter<"Superhero"> | string
    realName?: StringFilter<"Superhero"> | string
    originDescription?: StringNullableFilter<"Superhero"> | string | null
    superpowers?: StringNullableFilter<"Superhero"> | string | null
    catchPhrase?: StringNullableFilter<"Superhero"> | string | null
    images?: StringNullableListFilter<"Superhero">
    createdAt?: DateTimeFilter<"Superhero"> | Date | string
    updateAt?: DateTimeFilter<"Superhero"> | Date | string
  }

  export type SuperheroOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    realName?: SortOrder
    originDescription?: SortOrderInput | SortOrder
    superpowers?: SortOrderInput | SortOrder
    catchPhrase?: SortOrderInput | SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SuperheroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SuperheroWhereInput | SuperheroWhereInput[]
    OR?: SuperheroWhereInput[]
    NOT?: SuperheroWhereInput | SuperheroWhereInput[]
    nickname?: StringFilter<"Superhero"> | string
    realName?: StringFilter<"Superhero"> | string
    originDescription?: StringNullableFilter<"Superhero"> | string | null
    superpowers?: StringNullableFilter<"Superhero"> | string | null
    catchPhrase?: StringNullableFilter<"Superhero"> | string | null
    images?: StringNullableListFilter<"Superhero">
    createdAt?: DateTimeFilter<"Superhero"> | Date | string
    updateAt?: DateTimeFilter<"Superhero"> | Date | string
  }, "id">

  export type SuperheroOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    realName?: SortOrder
    originDescription?: SortOrderInput | SortOrder
    superpowers?: SortOrderInput | SortOrder
    catchPhrase?: SortOrderInput | SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: SuperheroCountOrderByAggregateInput
    _avg?: SuperheroAvgOrderByAggregateInput
    _max?: SuperheroMaxOrderByAggregateInput
    _min?: SuperheroMinOrderByAggregateInput
    _sum?: SuperheroSumOrderByAggregateInput
  }

  export type SuperheroScalarWhereWithAggregatesInput = {
    AND?: SuperheroScalarWhereWithAggregatesInput | SuperheroScalarWhereWithAggregatesInput[]
    OR?: SuperheroScalarWhereWithAggregatesInput[]
    NOT?: SuperheroScalarWhereWithAggregatesInput | SuperheroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Superhero"> | number
    nickname?: StringWithAggregatesFilter<"Superhero"> | string
    realName?: StringWithAggregatesFilter<"Superhero"> | string
    originDescription?: StringNullableWithAggregatesFilter<"Superhero"> | string | null
    superpowers?: StringNullableWithAggregatesFilter<"Superhero"> | string | null
    catchPhrase?: StringNullableWithAggregatesFilter<"Superhero"> | string | null
    images?: StringNullableListFilter<"Superhero">
    createdAt?: DateTimeWithAggregatesFilter<"Superhero"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Superhero"> | Date | string
  }

  export type SuperheroCreateInput = {
    nickname: string
    realName: string
    originDescription?: string | null
    superpowers?: string | null
    catchPhrase?: string | null
    images?: SuperheroCreateimagesInput | string[]
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type SuperheroUncheckedCreateInput = {
    id?: number
    nickname: string
    realName: string
    originDescription?: string | null
    superpowers?: string | null
    catchPhrase?: string | null
    images?: SuperheroCreateimagesInput | string[]
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type SuperheroUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    originDescription?: NullableStringFieldUpdateOperationsInput | string | null
    superpowers?: NullableStringFieldUpdateOperationsInput | string | null
    catchPhrase?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SuperheroUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperheroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    originDescription?: NullableStringFieldUpdateOperationsInput | string | null
    superpowers?: NullableStringFieldUpdateOperationsInput | string | null
    catchPhrase?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SuperheroUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperheroCreateManyInput = {
    id?: number
    nickname: string
    realName: string
    originDescription?: string | null
    superpowers?: string | null
    catchPhrase?: string | null
    images?: SuperheroCreateimagesInput | string[]
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type SuperheroUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    originDescription?: NullableStringFieldUpdateOperationsInput | string | null
    superpowers?: NullableStringFieldUpdateOperationsInput | string | null
    catchPhrase?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SuperheroUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperheroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    originDescription?: NullableStringFieldUpdateOperationsInput | string | null
    superpowers?: NullableStringFieldUpdateOperationsInput | string | null
    catchPhrase?: NullableStringFieldUpdateOperationsInput | string | null
    images?: SuperheroUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SuperheroCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    realName?: SortOrder
    originDescription?: SortOrder
    superpowers?: SortOrder
    catchPhrase?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SuperheroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SuperheroMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    realName?: SortOrder
    originDescription?: SortOrder
    superpowers?: SortOrder
    catchPhrase?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SuperheroMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    realName?: SortOrder
    originDescription?: SortOrder
    superpowers?: SortOrder
    catchPhrase?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SuperheroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SuperheroCreateimagesInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SuperheroUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}