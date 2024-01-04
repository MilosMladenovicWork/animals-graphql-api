export const requestLogger =
  () => (next: any) => (obj: any, args: any, context: any, info: any) => {
    console.log(obj);
    console.log(args);
    console.log(context);
    console.log(info);

    return next(obj, args, context, info);
  };
