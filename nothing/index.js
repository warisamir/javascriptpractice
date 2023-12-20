
function useState(initial){
    let _state= initial;
    function setState(value){
        _state=value;
    }
    function getState(){
        return _state;
    }
    return [getState,setState];
}
function counter(){
const [state,setState]=useState(0);
return {
    click(){
        setState(state()+1);
    },
    render(){
        console.log('click: ',state());
    }
}
}
const ct= counter();

ct.click();
ct.render();
ct.click();

ct.render();
ct.click();
ct.render();
ct.click();