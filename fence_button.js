'use strict';

const e = React.createElement;

const toppings = [
  {
    name: "Fence"
  },
  {
    name: "Gate"
  },
  {
    name: "Single Gate Kits"
  },
  {
    name: "Double Gate Kits"
  },
  {
    name: "Posts"
  },
  {
    name: "Caps"
  },
  {
    name: "PostBase"
  },
  {
    name: "Brackets"
  },
  {
    name: "Fastners"
  },
  {
    name: "CustomFinish"
  }
];


class FenceConfiguration extends React.Component {

  constructor(props) {
    super(props);
    this.state = { checkedItems: new Map() };
    this.handleChange = this.handleChange.bind(this);
    // const [total, setTotal] = useState(0);
  }
  
  handleChange (e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    var obj = Object.fromEntries(this.state.checkedItems);
    var jsonString = JSON.stringify(obj);
    window.webkit.messageHandlers.iOSNative.postMessage(obj);
  };
  
  render() {
    if (this.state.liked) {
      return 'Your Fence is Configured';
    }

    return (
    <div className="App">
      <h3>Select Layer Configuration</h3>
      <ul className="configuration-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="configuration-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={this.state.checkedItems.get(name)}
                    onChange={this.handleChange}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
    }
}

const domContainer = document.querySelector('#fence_configuration_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(FenceConfiguration));
