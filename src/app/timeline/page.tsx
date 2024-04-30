'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Appbar from '@/components/appbar/Appbar';


function RecipeReviewCard() {

  return (
    <Card sx={{ maxWidth: 1440 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
	  	<Typography variant="h4" gutterBottom align='left'>
		  第12回かわいい感性デザイン賞 募集(日本感性工学会)
      	</Typography>
        <Typography variant="body2" color="text.secondary">
		デザインに興味がある人は考えてみてください。<br />
		■■■VRSJ Announce 2024_20240416======================================<br />
　 　　　　　　<br />
　第12回かわいい感性デザイン賞 募集(日本感性工学会) <br />
<br />

=============================================================■■■<br />
日本感性工学会は、第12回かわいい感性デザイン賞を募集しています。<br />
皆様のご応募をお待ちしております。<br />
<br />
1. 募集開始：2024年4月15日<br />
2. 応募締切：2024年6月15日（予定）<br />
3. 第1次選考：2024年7月中旬までに実施<br />
4. 本選考：2024年8月初旬までに実施<br />
5. 選考結果発表：2024年8月中旬までに実施<br />
6. 表彰・展示：2024年9月12日～14日の日本感性工学会大会（タワーホール船堀）<br />
<br />
詳しくはサイトの「第12回募集スケジュール」をご覧ください。<br />
http://kawaii-award.org/<br />
<br />
お問合せ<br />
日本感性工学会 かわいい感性デザイン賞事務局<br />
kawaii-award[at]jske.org
※[at] を＠に変えてお送りください。
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const Timeline = () => {
  const tweets = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        username: '@johndoe',
        profileImage: 'https://mui.com/static/themes/mui-light.svg',
      },
      text: 'This is my first tweet!',
      createdAt: '2024-04-30T14:07:00Z',
    },
    {
      id: 2,
      user: {
        name: 'Jane Doe',
        username: '@janedoe',
        profileImage: 'https://mui.com/static/themes/mui-light.svg',
      },
      text: 'I am also on Twitter!',
      createdAt: '2024-04-30T14:06:00Z',
    },
  ];

  return (
	<Appbar>
		<RecipeReviewCard></RecipeReviewCard>
		<br />
		<RecipeReviewCard></RecipeReviewCard>
	</Appbar>
  );
};

export default Timeline;
