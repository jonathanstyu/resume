import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box"
    },
    "body": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "font": "14px/1.5 Lato, \"Helvetica Neue\", Helvetica, Arial, sans-serif",
        "color": "#777",
        "fontWeight": "300"
    },
    "h1": {
        "color": "#222",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "lineHeight": 1.1,
        "fontSize": 28
    },
    "h2": {
        "color": "#393939",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "lineHeight": 1.1
    },
    "h3": {
        "color": "#494949",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "lineHeight": 1.1
    },
    "h4": {
        "color": "#494949",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "h5": {
        "color": "#494949",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "h6": {
        "color": "#494949",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "width": "100%",
        "borderCollapse": "collapse"
    },
    "pre": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontFamily": "Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal",
        "color": "#333",
        "fontSize": 12,
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 8,
        "paddingLeft": 15,
        "background": "#f8f8f8",
        "borderRadius": 5,
        "border": "1px solid #e5e5e5",
        "overflowX": "auto"
    },
    "dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "a": {
        "color": "#39c",
        "fontWeight": "400",
        "textDecoration": "none"
    },
    "a small": {
        "fontSize": 11,
        "color": "#777",
        "marginTop": -0.6,
        "display": "block"
    },
    "wrapper": {
        "width": 860,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "blockquote": {
        "borderLeft": "1px solid #e5e5e5",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "fontStyle": "italic"
    },
    "code": {
        "fontFamily": "Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal",
        "color": "#333",
        "fontSize": 12
    },
    "th": {
        "textAlign": "left",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "borderBottom": "1px solid #e5e5e5",
        "color": "#444"
    },
    "td": {
        "textAlign": "left",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "borderBottom": "1px solid #e5e5e5"
    },
    "dt": {
        "color": "#444",
        "fontWeight": "700"
    },
    "img": {
        "maxWidth": "100%"
    },
    "header": {
        "width": 270,
        "float": "left",
        "position": "fixed"
    },
    "header ul": {
        "listStyle": "none",
        "height": 40,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "background": "linear-gradient(top, #f8f8f8 0%,#dddddd 100%)",
        "borderRadius": 5,
        "border": "1px solid #d2d2d2",
        "boxShadow": "inset #fff 0 1px 0, inset rgba(0,0,0,0.03) 0 -1px 0",
        "width": 270
    },
    "header li": {
        "width": 89,
        "float": "left",
        "borderRight": "1px solid #d2d2d2",
        "height": 40
    },
    "header ul a": {
        "lineHeight": 1,
        "fontSize": 11,
        "color": "#999",
        "display": "block",
        "textAlign": "center",
        "paddingTop": 6,
        "height": 40
    },
    "strong": {
        "color": "#222",
        "fontWeight": "700"
    },
    "header ul li + li": {
        "width": 88,
        "borderLeft": "1px solid #fff"
    },
    "header ul li + li + li": {
        "borderRight": "none",
        "width": 89
    },
    "header ul a strong": {
        "fontSize": 14,
        "display": "block",
        "color": "#222"
    },
    "section": {
        "width": 500,
        "float": "right",
        "paddingBottom": 50
    },
    "small": {
        "fontSize": 11
    },
    "hr": {
        "border": 0,
        "background": "#e5e5e5",
        "height": 1,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "footer": {
        "width": 270,
        "float": "left",
        "position": "fixed",
        "bottom": 50
    }
});