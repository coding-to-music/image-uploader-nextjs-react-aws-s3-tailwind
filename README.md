# image-uploader-nextjs-react-aws-s3-tailwind

# 🚀 You can drag and drop or use the file explorer to upload an image to AWS. The uploaded image URL will be shown in a URL bar to copy to clipboard. 🚀

https://github.com/coding-to-music/image-uploader-nextjs-react-aws-s3-tailwind

From / By https://github.com/Jascha-Biederstedt/image-uploader

## Environment variables:

```java

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/image-uploader-nextjs-react-aws-s3-tailwind.git
git push -u origin main
```

# Image Uploader

Built for the first task of the Full-stack Developer challenges by [devchallenges.io](https://devchallenges.io/paths/full-stack-developer).

You can drag and drop or use the file explorer to upload an image to AWS. The uploaded image URL will be shown in a URL bar to copy to clipboard.

## Getting this error after attempt to upload image

```
ReferenceError: s3Client is not defined
    at handler (webpack-internal:///(api)/./pages/api/image-upload.ts:52:121)
    at Object.apiResolver (/home/xrdpuser/ap/image-uploader-nextjs-react-aws-s3-tailwind/node_modules/next/dist/server/api-utils/node.js:184:15)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async DevServer.runApi (/home/xrdpuser/ap/image-uploader-nextjs-react-aws-s3-tailwind/node_modules/next/dist/server/next-server.js:403:9)
    at async Object.fn (/home/xrdpuser/ap/image-uploader-nextjs-react-aws-s3-tailwind/node_modules/next/dist/server/base-server.js:493:37)
    at async Router.execute (/home/xrdpuser/ap/image-uploader-nextjs-react-aws-s3-tailwind/node_modules/next/dist/server/router.js:222:36)
    at async DevServer.run (/home/xrdpuser/ap/image-uploader-nextjs-react-aws-s3-tailwind/node_modules/next/dist/server/base-server.js:612:29)
    at async DevServer.run (/home/xrdpuser/ap/image-uploader-nextjs-react-aws-s3-tailwind/node_modules/next/dist/server/dev/next-dev-server.js:569:20)
    at async DevServer.handleRequest (/home/xrdpuser/ap/image-uploader-nextjs-react-aws-s3-tailwind/node_modules/next/dist/server/base-server.js:311:20)
API resolved without sending a response for /api/image-upload?file=687474703a2f2f692e696d6775722e636f6d2f4149696d5138432e6a7067.jpeg, this may result in stalled requests.
```

### Browser console error

```
Warning: Prop `style` did not match. Server: "display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; --darkreader-inline-bgimage:none; --darkreader-inline-bgcolor: initial; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" Client: "display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
    at img
    at span
    at span
    at Image (webpack-internal:///./node_modules/next/dist/client/image.js:26:22)
    at div
    at FileUpload (webpack-internal:///./components/FileUpload.tsx:14:30)
    at div
    at div
    at Home (webpack-internal:///./pages/index.tsx:42:62)
    at MyApp (webpack-internal:///./pages/_app.tsx:11:27)
    at ErrorBoundary (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:8:20740)
    at ReactDevOverlay (webpack-internal:///./node_modules/next/dist/compiled/@next/react-dev-overlay/dist/client.js:8:23632)
    at Container (webpack-internal:///./node_modules/next/dist/client/index.js:71:9)
    at AppContainer (webpack-internal:///./node_modules/next/dist/client/index.js:592:26)
    at Root (webpack-internal:///./node_modules/next/dist/client/index.js:703:27) 

See more info here: https://nextjs.org/docs/messages/react-hydration-error
```