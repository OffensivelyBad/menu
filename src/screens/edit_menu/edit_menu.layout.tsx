import * as React from 'react';
import { View, Text } from 'react-native';
import { getMenuItemFromInput } from '../../utils';
import Input from '../../components/input';
import { MenuItemModel } from '../../models';
import styles from './styles';
import Button from '../../components/button';

type Props = {
  title?: string;
  onSave?: (menuItem: MenuItemModel) => void;
}

const EditMenuLayout = (props: Props) => {
  const { title, onSave } = props;
  const [titleText, setTitleText] = React.useState('');
  const [descriptionText, setDescriptionText] = React.useState('');
  const [priceText, setPriceText] = React.useState('');
  const [imageText, setImageText] = React.useState('');

  const onSavePress = React.useCallback(() => {
    if (!onSave) { return; }
    const newItem = getMenuItemFromInput(
      titleText,
      descriptionText,
      priceText,
      imageText
    );
    onSave(newItem);
  }, [descriptionText, imageText, onSave, priceText, titleText]);

  const canSave = React.useCallback(() => {
    return titleText.length && descriptionText.length && priceText.length && imageText.length;
  }, [descriptionText, imageText, priceText, titleText]);

  const setPrice = (text: string) => {
    let price = text;
    if (price.length && !text.startsWith('$')) {
      // TODO: format for currency instead of appending $, which will also format to 2 decimal places
      price = `$${price}`;
    }
    setPriceText(price);
  };

  return (
    <View style={styles.container}>
      {title ? <Text>{title}</Text> : null}
      <Input
        title="Title"
        text={titleText}
        placeholder="title..."
        onChangeText={setTitleText}
      />
      <Input
        title="Description"
        text={descriptionText}
        placeholder="description..."
        onChangeText={setDescriptionText}
      />
      <Input
        title="Price"
        text={priceText}
        placeholder="price..."
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Input
        title="Image"
        text={imageText}
        placeholder="image URL..."
        onChangeText={setImageText}
      />
      <Button
        title="Add"
        onPress={onSavePress}
        disabled={!canSave()}
      />
    </View>
  );
};

export default EditMenuLayout;
