

import { NextResponse } from 'next/server';
const axios = require('axios');
const cheerio = require('cheerio');
export async function GET(res) {
  try {
    // Fetch HTML content from the URL
    const response = await axios.get('https://www.cricbuzz.com/cricket-match/live-scores');
    const html = response.data;

    // Load HTML content into Cheerio
    const $ = cheerio.load(html);

    // Select live score elements
    const liveScoreElements = $('div.cb-mtch-lst.cb-tms-itm');

    // Initialize an array to store matches
    const matches = [];

    // Iterate over live score elements
    liveScoreElements.each((index, element) => {
      // Extract data for each match
      const teamsHeading = $(element).find('h3.cb-lv-scr-mtch-hdr a').text();
      const matchNumberVenue = $(element).find('span').text();
      const battingTeam = $(element).find('div.cb-hmscg-bat-txt div.cb-hmscg-tm-nm').text();
      const battingTeamScore = $(element).find('div.cb-hmscg-bat-txt div.cb-hmscg-tm-nm+div').text();
      const bowlTeam = $(element).find('div.cb-hmscg-bwl-txt div.cb-hmscg-tm-nm').text();
      const bowlTeamScore = $(element).find('div.cb-hmscg-bwl-txt div.cb-hmscg-tm-nm+div').text();
      const textLive = $(element).find('div.cb-text-live').text();
      const textComplete = $(element).find('div.cb-text-complete').text();
      const matchLink = $(element).find('a.cb-lv-scrs-well.cb-lv-scrs-well-live').attr('href');

      // Create a match object
      const matchObj = {
        teamsHeading,
        matchNumberVenue,
        battingTeam,
        battingTeamScore,
        bowlTeam,
        bowlTeamScore,
        textLive,
        textComplete,
        matchLink
      };

      // Add match object to matches array
      matches.push(matchObj);
    });

    // Send the extracted matches as a JSON response
    // res.status(200).json(matches);
    return NextResponse.json({ "result": matches });
  } catch (error) {
    // Handle errors
    console.error(error);
    return NextResponse.error('Internal Server Error');
  }
}
