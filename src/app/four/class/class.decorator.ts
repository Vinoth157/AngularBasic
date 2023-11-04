export function testDecorator(tag: any, hookId: any) {
  console.log('test Decorator');
  return (cons: any) => {
    console.log(cons);
    console.log(hookId);
    console.log(tag);
    // const hook = document.getElementById(hookId);
    // hook.innerHTML = tag;

    // console.log(
    //   document.getElementsByClassName('test')[0]!.querySelector('h1')!.innerHTML
    // );
    // document.getElementById(hookId)!.querySelector('h1')!.innerHTML = 'tessst';
  };
}
