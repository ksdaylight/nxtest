'use client'

import { apiClient } from "../app/utils/helps";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
export const Test: React.FC<Props> = () => {

    const { mutate } =
      apiClient.createPost.useMutation({
        onSuccess: () => {
          console.log('request success');
        },
      });

      async function onTestClick() {
        console.log('click');
        // await test(data.email);
        mutate({
          body: {
            title:'test'
          },
        });
      }
  return (
    <>
      <button onClick={onTestClick}>Click</button>
    </>
  );
}