import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MenuItemModel } from '../../models';
import EditableText from '../editable_text/editable_text.layout';
import styles from './styles';

type Props = {
  item: MenuItemModel,
  onDelete?: (item: MenuItemModel, callback?: (shouldDelete: boolean) => void) => void;
  updateItem?: (currentItem: MenuItemModel, newItem: MenuItemModel) => void;
}

const MenuItem = (props: Props) => {
  const swipeableRef = React.useRef<Swipeable | null>(null);
  const { item, onDelete, updateItem } = props;

  const [newItem, setNewItem] = React.useState(item);
  const { description, image, price, title } = newItem;

  const [newTitle, setNewTitle] = React.useState(title);
  const [newDescription, setNewDescription] = React.useState(description);
  const [newPrice, setNewPrice] = React.useState(price);
  const [newImage, setNewImage] = React.useState(image);

  React.useEffect(() => {
    // Keep the item up to date
    setNewItem(item);
  }, [item, setNewItem]);

  React.useEffect(() => {
    // If the new item changes, update it the state
    updateItem ? updateItem(item, newItem) : null;
  }, [item, newItem, updateItem]);

  React.useEffect(() => {
    // If any of the new fields changes, set the new item so that it updates
    const { title: oldTitle, description: oldDescription, price: oldPrice, image: oldImage } = newItem;
    if (newTitle !== oldTitle) {
      setNewItem({ ...newItem, title: newTitle });
    }
    if (newDescription !== oldDescription) {
      setNewItem({ ...newItem, title: newDescription });
    }
    if (newPrice !== oldPrice) {
      setNewItem({ ...newItem, title: newPrice });
    }
    if (newImage !== oldImage) {
      setNewItem({ ...newItem, title: newImage });
    }
  }, [newItem, newTitle, newDescription, newPrice, newImage]);

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
          <EditableText value={newTitle} onChangeText={setNewTitle} style={styles.title} />
          <EditableText value={newPrice} onChangeText={setNewPrice} style={styles.price} />
          <EditableText value={newDescription} onChangeText={setNewDescription} style={styles.description} />
          <EditableText value={newImage} onChangeText={setNewImage} style={styles.imageURL} />
        </View>
      </View>
    </Swipeable>
  );
};

export default MenuItem;
