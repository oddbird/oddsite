public: yes
location: styleguide
template: 'styleguide.html.j2'
comments: False
after:
  - include: 'styleguide/_colors.html.j2'
  - include: 'styleguide/_typography.html.j2'

base_colors:
  - name: black
    color: '#333'
  - name: white
    color: '#fff'
  - name: blue
    color: 'hsl(195, 85%, 62%)'
  - name: orange
    color: 'hsl(24, 100%, 62%)'
  - name: yellow
    color: 'hsl(45, 85%, 62%)'
  - name: green
    color: 'hsl(75, 65%, 62%)'
  - name: pink
    color: 'hsl(330, 85%, 62%)'
  - name: red
    color: 'hsl(0, 85%, 62%)'

colors:
  - name: text
    color: 'black'
  - name: back
    color: 'blue (tint: 95%)'
  - name: border
    color: 'text (tint: 60%)'
  - name: callout
    color: 'blue (tint: 85%)'
  - name: action
    color: 'orange'
  - name: focus
    color: 'orange (shade: 15%)'
  - name: accent
    color: 'blue'

fonts:
  - title: serif
    name: BaskervilleFS
    styles:
      - regular
      - italic
      - bold
      - bold italic

  - title: sans
    name: SourceSansPro
    styles:
      - regular
      - italic
      - bold
      - bold italic

  - title: mono
    name: SourceCodePro
    styles:
      - regular
      - bold


Style Guide
===========

Welcome to the odd styleguide.
