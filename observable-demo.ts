let colors = ['red', 'green', 'yellow', 'red'];

let source = Rx.Observable.fromArray(colors);

//source.subscribe(d => console.log(d.toUpperCase()));

source
  .map(item => item.toUpperCase())
  .filter(item => item == 'red')
  .map(element => element + '--toto')
  .subscribe(item => console.log(item));
