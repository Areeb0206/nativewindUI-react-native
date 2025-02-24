import { Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { Alert } from '~/components/nativewindui/Alert';
import { AlertRef } from '~/components/nativewindui/Alert/types';
import { Button } from '~/components/nativewindui/Button';
import { Text } from '~/components/nativewindui/Text';

export default function AlertScreen() {
  const alertRef = React.useRef<AlertRef>(null);

  return (
    <>
      <Stack.Screen options={{ title: 'Alert' }} />
      <View className="flex-1 items-center justify-center gap-4 py-4">
        <Button
          onPress={() => {
            alertRef.current?.show();
          }}>
          <Text>Show Prompt With Ref</Text>
        </Button>
        <Alert
          title="Discard draft?"
          message="Some message that is kind of important since it is in an alert."
          buttons={[
            {
              text: 'Cancel',
              style: 'cancel',
              onPress: (text) => {
                console.log('Cancel Pressed', text);
              },
            },
            {
              text: 'OK',
              onPress: (text) => {
                console.log('OK Pressed', text);
              },
            },
          ]}>
          <Button variant="secondary">
            <Text>Show Alert</Text>
          </Button>
        </Alert>
        <Alert
          title="Login to Hydra"
          message="Reminding you to drink water."
          materialIcon={{ name: 'water-outline' }}
          materialWidth={370}
          prompt={{
            type: 'login-password',
            keyboardType: 'email-address',
          }}
          buttons={[
            {
              text: 'Report',
              style: 'destructive',
              onPress: () => {
                console.log('Report Pressed');
              },
            },
            {
              text: 'Cancel',
              style: 'cancel',
              onPress: (text) => {
                console.log('Cancel Pressed', text);
              },
            },
            {
              text: 'OK',
              onPress: (text) => {
                console.log('OK Pressed', text);
              },
            },
          ]}
          ref={alertRef}
        />
      </View>
    </>
  );
}
