export function consoleLog(test: string) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('method name - ', propertyKey);
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      console.log('changed');
      return originalMethod.apply(this, args);
    };
  };
}

export function triggerEvent(eventType: string) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('method name - ', propertyKey);
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      return originalMethod.apply(this, new MouseEvent(eventType));
    };
    document.addEventListener(eventType, originalMethod);
  };
}
