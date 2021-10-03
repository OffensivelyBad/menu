import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MenuItemModel } from '../../models';
import styles from './styles';

type Props = {
  item: MenuItemModel,
  onDelete?: (item: MenuItemModel, callback?: (shouldDelete: boolean) => void) => void;
}

const MenuItem = (props: Props) => {
  const swipeableRef = React.useRef<Swipeable | null>(null);
  const { item, onDelete } = props;
  const { description, image, price, title } = item;

  const renderRightActions = (
    onPress: () => void
  ) => {
    return (
      <Pressable onPress={onPress}>
        <View style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </Pressable>
    );
  };

  const closeRow = () => {
    swipeableRef?.current?.close();
  };

  const onItemDelete = React.useCallback(() => {
    if (onDelete) {
      onDelete(item, (shouldDelete) => {
        if (shouldDelete) {
          // TODO: animate the row prior to it being deleted
        } else {
          closeRow();
        }
      });
    }
  }, [item, onDelete]);



  return (
    <Swipeable
      ref={swipeableRef}
      renderRightActions={() => renderRightActions(onItemDelete)}
      rightThreshold={10}
      enableTrackpadTwoFingerGesture
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default MenuItem;
