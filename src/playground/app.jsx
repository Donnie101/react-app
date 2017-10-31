class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const options = this.state.options;
        alert(options[Math.floor(Math.random() * options.length)])
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }


        this.setState((preState) => ({ options: [...preState.options, option] }));
    }

    handleDeleteOption(option) {
        this.setState(() => {
            return {
                options: this.state.options.filter((item) => {
                    return item !== option
                })
            }
        })
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) this.setState(() => ({ options }));
        } catch (error) {
            //HITLER DID NOTHING WROOOONG!!!
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render() {
        const title = 'Todo App';
        const subtitle = 'Sort yourself out you SandNigger';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0 ? true : false}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    hasOptions={this.state.options.length > 0 ? true : false}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Default Title'
}

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}>
                What should I do?
            </button>
        </div>
    );
}


const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((option) => {
                return <Option
                    handleDeleteOption={props.handleDeleteOption}
                    key={option}
                    optionText={option} />
            })}
            <button
                disabled={!props.hasOptions}
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(event) => {
                    props.handleDeleteOption(props.optionText)
                }}>
                Delete Option
            </button>
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            error: null
        }
    }

    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) event.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<TodoApp />, document.getElementById('app'))