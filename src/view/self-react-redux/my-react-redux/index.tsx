import React from 'react';

const context = React.createContext(null);
interface Props {
  store: any;
  children: any;
}
export function Provider(props: Props) {
  const { store, children } = props;
  return <context.Provider value={store}>{children}</context.Provider>;
}
const noop = (state, ownProps): any => {
  return ownProps;
};
export function connect(mapStateToProps = noop) {
  return function wrapWithConnect(WrappedComponent: React.ComponentType) {
    function Com(props: {
      [propName: string]: any;
      children?: React.ReactNode;
    }) {
      return (
        <context.Consumer>
          {(store) => {
            const extendsProps = {
              ...props,
              ...mapStateToProps(store, props),
            };
            return (
              <WrappedComponent {...extendsProps}>
                {props.children}
              </WrappedComponent>
            );
          }}
        </context.Consumer>
      );
    }
    Com.defaultProps = {
      children: null,
    };
    return Com;
  };
}
