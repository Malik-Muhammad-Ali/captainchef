import { Box, Container, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useAppStore from '../../store/store';

const Terms = () => {
    const navigate = useNavigate();
    const {language } = useAppStore();
    const isArabic = language === "ar";

    const terms = [
        {
          id: 1,
          en: "We work all days of the week except Friday.",
          ar: "نعمل طوال أيام الأسبوع ما عدا يوم الجمعة."
        },
        {
          id: 2,
          en: "The monthly subscription is from Saturday to Thursday of each week, meaning that the total subscription days are 24 days.",
          ar: "الاشتراك الشهري يكون من السبت إلى الخميس من كل أسبوع، مما يعني أن إجمالي أيام الاشتراك هو 24 يومًا."
        },
        {
          id: 3,
          en: "In case you want to change the branch, you can update the city and branch from your subscription page.",
          ar: "في حالة رغبتك في تغيير الفرع، يمكنك تحديث المدينة والفرع من صفحة الاشتراك الخاصة بك."
        },
        {
          id: 4,
          en: "Delivery times: Delivery times are scheduled when adding the delivery service according to the time available so as not to conflict with the times of the subscribers in advance.",
          ar: "مواعيد التوصيل: يتم تحديد مواعيد التوصيل عند إضافة خدمة التوصيل وفقًا للوقت المتاح، بحيث لا تتعارض مع أوقات المشتركين مسبقًا."
        },
        {
          id: 5,
          en: "If the representative does not respond to receiving the meals at the time of delivery, the meals will be returned to the restaurant, and the customer can receive them within 48 hours only, then it will be destroyed.",
          ar: "إذا لم يستجب المندوب لاستلام الوجبات في وقت التسليم، فسيتم إرجاع الوجبات إلى المطعم، ويمكن للعميل استلامها خلال 48 ساعة فقط، وإلا سيتم التخلص منها."
        },
        {
          id: 6,
          en: "The customer can suspend the subscription 48 hours before, provided that the period does not exceed 14 days, from the (stop subscription) icon.",
          ar: "يمكن للعميل تعليق الاشتراك قبل 48 ساعة، بشرط ألا تتجاوز الفترة 14 يومًا، من خلال أيقونة (إيقاف الاشتراك)."
        },
        {
          id: 7,
          en: "The customer has the right to cancel the subscription after deducting 20% of management fees from the remaining value of the subscription.",
          ar: "يحق للعميل إلغاء الاشتراك بعد خصم 20% من رسوم الإدارة من القيمة المتبقية للاشتراك."
        },
        {
          id: 8,
          en: "The subscription cancellation feature is not available for weekly packages.",
          ar: "خاصية إلغاء الاشتراك غير متاحة للحزم الأسبوعية."
        },
        {
          id: 9,
          en: "The subscription cancellation feature is not available for subscriptions through Tabby.",
          ar: "خاصية إلغاء الاشتراك غير متاحة للاشتراكات عبر Tabby."
        },
        {
          id: 10,
          en: "The subscriber is not entitled to take more than his due meals per day.",
          ar: "لا يحق للمشترك الحصول على أكثر من وجباته المستحقة يوميًا."
        },
        {
          id: 11,
          en: "The customer has the right to repeat chicken meals and sandwiches of all kinds only in his daily meals.",
          ar: "يحق للعميل تكرار وجبات الدجاج والسندويشات من جميع الأنواع فقط في وجباته اليومية."
        },
        {
          id: 12,
          en: "The restaurant is not responsible for meals that the customer does not receive during the period in which the subscription is active.",
          ar: "المطعم غير مسؤول عن الوجبات التي لا يتسلمها العميل خلال فترة الاشتراك."
        }
      ];
  return (
    <Container sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        // alignItems: "center",
        direction: isArabic ? "rtl" : "ltr",
    }}>
    <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "flex-start", sm: "space-between" },
          alignItems: "center",
          borderRadius: "10px",
          width: { xs: "350px", sm: "90%", md: "100%", lg: "95%", xl: "92.8%" },
          // border: "2px solid black",
          mr: { lg: "20px", sm: "0px", md: "0px", xs: "0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: {
              lg: "center",
              md: "center",
              sm: "center",
              xs: "flex-start",
            },
            justifyContent: "center",
            gap: "15px",
            flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
          }}
          onClick={() => navigate(-1)}
        >
          {/* Icon */}
          <IconButton
            sx={{
              width: { xs: "48px", sm: "56px" },
              height: { xs: "48px", sm: "56px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20%",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <ArrowBackIosIcon
              sx={{
                fontSize: "24px",
                ml: language === "ar" ? "-10px" : "10px",
                transform:
                  language === "ar" ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </IconButton>

          {/* "Choose Plan" Typography */}
          {/* Box for mobile screens only */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              justifyContent: "space-between",
              flexWrap: "wrap",
              alignItems: "center",
              width: "100%",
              gap: "170px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              {isArabic ? "الشروط والأحكام" : "Terms & Conditions"}
            </Typography>
          </Box>

          {/* Box for larger screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: { xs: "center" },
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "20px", md: "24px" },
                fontWeight: "600",
                color: "#000",
              }}
            >
              {isArabic ? "الشروط والأحكام" : "Terms & Conditions"}
            </Typography>
          </Box>
        </Box>
    </Box>
        <Box>
        {terms.map((term, index) => (
          <Typography
            key={index}
            variant="body1"
            sx={{ marginBottom: 2, lineHeight: 1.6 }}
          >
            - {term[language]}
          </Typography>
        ))}
      </Box>
    </Container>
  )
}

export default Terms
