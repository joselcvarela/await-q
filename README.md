# AwaitQ

Await pop value from queue. If is there, return it. Otherwise, wait until new value.

## Example

```js
import { AwaitQ } from "await-q";

const queue = new AwaitQ();

setTimeout(() => queue.push("await-q"), 5000);
const packageName = await queue.pop();
```
