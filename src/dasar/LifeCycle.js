import {Text, View, Button} from 'react-native';
import React, {Component, useEffect, useState} from 'react';

// export class LifeCycle extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nama: 'ihsan',
//     };
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     setTimeout(() => {
//       this.setState({
//         nama: 'miftahul huda',
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }

//   render() {
//     return (
//       <View>
//         <Text>{this.state.nama}</Text>
//         <Button
//           title="ubah nama"
//           onPress={() => this.setState({nama: 'ihsan miftahul huda'})}
//         />
//       </View>
//     );
//   }
// }
// export default LifeCycle;

// React Hooks / side effect / lifecycle
const LifeCycle = () => {
  const [nama, setNama] = useState('ihsan');
  useEffect(() => {
    console.log('didMount');
    setTimeout(() => {
      setNama('miftahul huda');
    }, 2000);
    return () => {
      console.log('willUnmount');
    };
  }, [nama]);

  return (
    <View>
      <Text>{nama}</Text>
      <Button
        title="ubah nama"
        onPress={() => setNama('Ihsan miftahul huda')}
      />
    </View>
  );
};

export default LifeCycle;
