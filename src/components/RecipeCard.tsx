import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecipeCard = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img
          src="https://edamam-product-images.s3.amazonaws.com/web-img/f14/f14b37333a7e1706bc72ed2bdd095080.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIA82PrXrYg7Ds3PrvDwod6DKgUuqV%2F8rKsSX4pmY697dAiEAmcEaoknQW2bkv%2BbYU83bkjh95zqdcOGBoINlAt4TWrUqwgUI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDm5OaSbt2Vlk149mSqWBYegdtlI2%2F9yq9e%2FlJM4CYEZYwyXjPfw68weXZqksW9nfoZrviU%2B8FpHV5Roi8CHIBpMQnozS0reTyFDe2VP6b2xbSMyLYWLRApaDbtGDHG5OeUqTTgc%2F3VGomUKiVH%2FJ2vEmi0LdVwu%2F5lfgH5DzUGEAdvixuHTeSh%2FSB3GJ41skuGVJ1iRJQjv5O3e7ZCfLVDzl3E%2FJ%2BFc0BiYObI3Kvs7Q0pXasKTcItrcBiSoL6y0v%2FHF9NbgbsThrMRuwskM01P3lAQGaHgCRQMpD%2F7dcP5M9jmqgyzG3yVeUDYNaBaW3b6bEhIqgCTRt5%2Ft1Xy9gHdk3r3Qb4jF1tIFcJ%2F6CdV%2B%2Bt1Aw2ouv3DvFR8TLQ8JfBxKLphyyQznEDq5KNSfP3Ako67ax2j86dczhosL4pRpP%2B%2FYFe3OcOY7BUr4ELVs8jQ4kZSarLTDyT9PLa7BJ3ZTuMOpSEOIvWJDUtZbJtIf3%2B3kSkFADWbgDq01021wbj%2FHIJF867H1TO1RARzoY7dhIT4cKKMDxRLI8%2BrLZmLjSBybdz16Tmz0S2SGHLQBytFA8TQ28s2ZWwss%2Fb990XpB1jbiZbMnlbZXo4ogYC%2FtHLl4mFz4AakzqVgUkdSgZBzGGo5x%2FA%2FE%2B2lQoRUDU1T9aVWUB9F2dMAVBpS7uSHVpiJgOt655WLrS6Rr2C9X5j8bScBbE4z8fC0eFBSf6L1asUupRiYoN0QwDn%2Fk2MshZ0Ga9pn6hjaJR%2FgOMgPhI7DvNgww1BlKpGuVW5axAihepiQMFOvQk3Rz%2FT2o4eMlXpykUdNWCN5I9i5Tyv4PV%2BVoYrSl6jFXrCeONukXbsdc0mXK6wWgUM2%2BOCQOT6c4Ek7yKXHKEnytsvQb%2B5oaHDxMVNaMMOiq6gGOrEBu6Rj07O2YwLCo6b8%2Fs496qAXc1sz1lk%2Bk1t61mVmYJzH9YwevVdHeDhLAQnLSWsNIE%2BZqYZOmdkUo%2BoqnaEIUZ%2BDzZgojDNGazAFM3W1ykrEvltJVoRxKBobEmmdEMQtiPullkk58n%2BzjHI9fNcCRFdPXP%2BeAmjsAx67Jo7JCN6ymlN%2BATIOlNnlHlIvqvi3lR8PxJhVnPO4AF%2BW%2BvzToOoh5%2FJ80FQyO7tDlzBxC5RC&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230920T113203Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFHYZWEEOQ%2F20230920%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=123c1748c98a6be273a85a82f1938ee77e89625b5eb43ced923cc072e6f354fb"
          alt="food image"
          className="ml-auto h-40 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-3">
        <div className="flex justify-between">
          <CardTitle className="text-m pb-2">Card Title</CardTitle>
          <i className="fa-regular fa-star"></i>
        </div>
        <CardDescription className="text-xs pb-2">
          Card Description
        </CardDescription>
        <p className="text-xs">Card Content</p>
      </CardContent>
      <CardFooter className="p-3 text-xs">
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
