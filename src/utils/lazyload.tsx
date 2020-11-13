import React, { ComponentType, ReactElement } from 'react';

interface Props {}
interface State {
  UserComponent: ComponentType;
}
interface ImportComponent {
  (): Promise<any>;
}

export default function lazyload(
  loader: ImportComponent = async () => {},
  LoadingElement: ReactElement = null
): ComponentType {
  return class Lazyload extends React.Component<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        UserComponent: null,
      };
    }

    componentDidMount() {
      this.loadAsync();
    }

    loadAsync = async () => {
      try {
        const result = await loader();
        this.setState({
          UserComponent: result.default,
        });
      } catch (err) {
        console.log('lazyload exception', err);
      }
    };

    render() {
      const { UserComponent } = this.state;
      if (UserComponent) {
        return <UserComponent {...this.props} />;
      }
      return LoadingElement || null;
    }
  };
}
