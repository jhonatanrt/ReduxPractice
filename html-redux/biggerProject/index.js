// step 1.2
      console.group('Redux.createStore(REDUCER)')
      var store = Redux.createStore(combineReducer);
      console.groupEnd('Redux.createStore(REDUCER)')
      // ~end step 1.2
      // step 1.3
      var valueEl = document.getElementById('value');
      function render() {
        console.group('render()')
        console.log('STATE == store.getState() == ', store.getState())
        valueEl.innerHTML = store.getState().count;
        document.getElementById('value2').innerHTML = store.getState().sum;
        console.groupEnd('render()')
      }
      render();
      store.subscribe(render);
      // ~end step 1.3
