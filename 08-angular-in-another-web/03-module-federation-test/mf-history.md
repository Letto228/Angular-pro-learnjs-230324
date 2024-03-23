```ts
/**
 *      Monolit Front-end
 * 
 *              |
 *              V
 * 
 *      Monolit Back-end
 */
```

------------------------------------------------------------

```ts
/**
 *                  Monolit Front-end
 *
 *           /             |               \
 *          |              |                |   
 *          V              V                V
 * 
 *      Back-end       Back-end         Back-end
 *         1               2                3
 */
```

------------------------------------------------------------

```ts
/**
 *      _________________________________________
 *     |                Shell                    |
 *      Front-end      Front-end        Front-end
 *          1              2                3
 *
 *          |              |                |
 *        (api)          (api)            (api)   
 *          V              V                V
 * 
 *      Back-end       Back-end         Back-end
 *         1               2                3
 */
```

shell: share-lib@^1.0.0
micro-front: share-lib@^1.0.1

shell: share-lib@~1.0.0
micro-front: share-lib@1.1.0

shell: share-lib@^2.0.0
micro-front: share-lib@^1.1.0
`requiredVerstion: ">=1.1.0 <3.0.0"`
