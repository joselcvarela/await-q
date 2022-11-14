class AwaitQ {
  queue = [];
  listeners = {};

  emit = (type) => {
    for (const thisType in this.listeners) {
      if (thisType !== type) continue;
      this.listeners[thisType]();
    }
  };

  once = (type, cb) => {
    this.listeners[type] = cb;
  };

  awaitFor = (type) => {
    return new Promise((res) => {
      this.once(type, res);
    });
  };

  push = async (value) => {
    this.queue.push(value);

    this.emit("new_value");

    return this;
  };

  pop = async () => {
    if (!this.queue.length) await this.awaitFor("new_value");

    return this.queue.pop();
  };
}

export { AwaitQ };
