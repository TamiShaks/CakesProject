import { createTheme } from '@mui/material/styles';
import React from 'react';
import { Container, Button, Typography } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#f7b2ad', // ורוד אפרסקי
    },
    secondary: {
      main: '#fcd5ce', // אפרסק בהיר
    },
  },
});

export default function About() {
  return (
    <div>
      {/* לוגו העסק */}
      <Container style={{ backgroundColor: '#f7b2ad', padding: '20px' }}>
        <Typography variant="h3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          ברוכים הבאים ל-useCake – בוטיק העוגות שכולם מדברים עליו
        </Typography>
        <Typography style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
          ב־useCake אנחנו לא רק אופים – אנחנו יוצרים חוויה של עונג, יופי וטעם בלתי נשכח. <br />
          ההתמחות שלנו היא עוגות ויטרינה יוקרתיות שמצולמות באהבה, נמכרות במהירות, ונשארות בזיכרון של כל מי שטועם. <br />
          🔸 כל עוגה נבנית בקפידה, בעבודת יד, עם שילובי טעמים מדויקים ועיצוב עוצר נשימה. <br />
          🔸 אנחנו מקפידים על חומרי גלם איכותיים, טריים ובלתי מתפשרים. <br />
          🔸 התפריט שלנו מתחדש כל הזמן – כדי שתמיד תחכי לביס הבא. <br />
          useCake – כי מגיע לך טעם של בוטיק.
        </Typography>
      </Container>

      {/* מידע על העסק */}
      <Container style={{ backgroundColor: '#fcd5ce', padding: '20px' }}>
        <Typography variant="h4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          🍰 טעימה קטנה ממה שמחכה לכם...
        </Typography>
        <Typography style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
          העוגות של <strong>useCake</strong> מדברות בעד עצמן – יופי שקשה להתעלם ממנו, וטעם שלא שוכחים. <br />
          הציצו בגלריה וגלו עולם של עיצוב, דיוק והשראה מתוקה.
        </Typography>
        <Button variant="contained" color="primary">
          לגלריית התמונות >>
        </Button>
      </Container>

      {/* הגלריה */}
      <Container style={{ backgroundColor: '#f7b2ad', padding: '20px' }}>
        <Typography variant="h4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          🍰 גלריית העוגות שלנו
        </Typography>
        <Typography style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
          🍰 טעימה קטנה ממה שמחכה לכם... <br />
          העוגות של useCake מדברות בעד עצמן – יופי שקשה להתעלם ממנו, וטעם שלא שוכחים. <br />
          הציצו בגלריה וגלו עולם של עיצוב, דיוק והשראה מתוקה.
        </Typography>
        {/* כאן אפשר להוסיף תמונות של העוגות */}
      </Container>

      {/* המתכונים */}
      <Container style={{ backgroundColor: '#fcd5ce', padding: '20px' }}>
        <Typography variant="h4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          📖 המתכונים של useCake – לאפות בהשראה
        </Typography>
        <Typography style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
          רוצים להכין עוגות שמקבלות תשואות גם בבית? <br />
          במתחם המתכונים של useCake תמצאו מבחר איכותי ונבחר של מתכונים שמביאים את הקסם של הקונדיטוריה המקצועית – היישר לתנור הביתי שלכם. <br />
          ✨ ומה מיוחד כאן? <br />
          לכל מתכון תוכלו להעניק ציון באימוג'י – סמיילי מתלהב, לבבות או עיניים נוצצות – בהתאם לכמה שהתלהבתם ממנו בפועל. <br />
          כך, בפעם הבאה שתיכנסו – תדעו בדיוק מה "גנב את ההצגה" אצלכם בבית. <br />
          🧁 בנוסף, כל מתכון זמין להורדה מיידית כקובץ PDF – כדי שתוכלו לשמור, להדפיס ולשבץ בקלאסר המשפחתי. <br />
          useCake – כי גם בבית, כל עוגה יכולה להיות יצירת בוטיק.
        </Typography>
        <Button variant="contained" color="primary">
          הורידו את המתכון – והתחילו לאפות!
        </Button>
      </Container>

      {/* יצירת עוגה מותאמת אישית */}
      <Container style={{ backgroundColor: '#f7b2ad', padding: '20px' }}>
        <Typography variant="h4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          🎨 תעצבו את העוגה. אנחנו נאפה את החלום.
        </Typography>
        <Typography style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.6' }}>
          הכירו את הפיצ'ר שהופך כל אחד למעצב עוגות מקצועי – יוצרים עוגה אונליין, בלחיצות. <br />
          ב־useCake אתם לא רק בוחרים עוגה – אתם יוצרים אותה בעצמכם: <br />
          🍰 תבחרו את הצורה <br />
          🎂 תקבעו כמה קומות <br />
          🍫 תבחרו את הטעם <br />
          🍓 תוסיפו את הקישוט שמעל <br />
          ולא תאמינו – תוך 3 שניות תקבלו הדמיה חיה של העוגה שיצרתם. <br />
          ככה רואים אותה לפני שהיא נכנסת לאפייה. <br />
          מה שנשאר? ללחוץ "הזמן" ולחכות לרגע שבו היצירה שלכם תגיע לדלת. <br />
          כי כל עוגה מספרת סיפור – וזה הסיפור שלכם.
        </Typography>
        <Button variant="contained" color="primary">
          התחילו לעצב את העוגה שלכם עכשיו!
        </Button>
      </Container>
    </div>
  );
}
