## **UniRush** 
**UI / UX Design Documentation**

**Document Title:** UniRush UI/UX Design 

**Platform:** Android · iOS · Web Documentation 

**Scope:** All user roles 

**Version:** 2.0 

**Design System Version:** v2.0 

**Date:** June 2026 

**Prepared By:** UniRush Design & Product 

**Status:** Confidential Draft Team 

_This document is the authoritative reference for all UI and UX decisions relating to the UniRush platform. It is intended for use by product designers, frontend engineers, and QA teams. All screen designs must comply with the specifications herein._ 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 1 of 24 

## **1. Introduction** 

This UI/UX Design Documentation defines the visual language, interaction patterns, component specifications, screen flows, and usability guidelines for the UniRush mobile and web applications. It serves as the single source of truth for design and engineering teams throughout the product lifecycle. 

## **1.1 Document Scope** 

- Visual identity: brand colours, typography, iconography, and spacing system 

- Component library: buttons, input fields, cards, navigation, modals, and alerts 

- Screen-by-screen design specifications for all user roles 

- User flow diagrams and interaction logic 

- Accessibility and usability requirements 

- Responsive design guidelines for Android, iOS, and web 

## **1.2 Target Platforms** 

- Mobile Native — Android (minimum API 26 / Android 8.0) and iOS (minimum iOS 14) 

- Progressive Web App — web.unirush.ug and sellers.unirush.ug 

- Rider App — low-data optimised interface for Boda Riders 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 2 of 24 

## **2. Brand & Visual Identity** 

## **2.1 Brand Positioning** 

UniRush's visual identity communicates speed, trust, and accessibility — three values critical for a platform operating in a university context where students expect fast results, safety, and a product that feels built for them. The deep blue anchors credibility and professionalism; the gold energises the interface and drives action; and the white space creates the clarity needed for a multi-role platform serving users with varying digital literacy levels. 

## **2.2 Colour Palette** 

The following four colours constitute the entire UniRush colour system. No additional brand colours may be introduced without a design system update. All UI elements must be built exclusively from these colours and their approved opacity variants. 

|**Colour Name**|**HEX**<br>**Code**|**Usage / Application**|
|---|---|---|
|**Primary Deep**<br>**Blue**|`#003366`|Header backgrounds, navigation bars, primary buttons<br>(dark variant), brand identity elements|
|**Primary Gold /**<br>**Yellow**|`#FFCC33`|CTA buttons (Create Account, Log In, Place Order),<br>toggles, highlights, interactive elements|
|**Neutral White**|`#FFFFFF`|Card backgrounds, form surfaces, modal backgrounds,<br>content areas|
|**Dark Text / Icons**|`#1A1A1A`|Body text, labels, icons, secondary headings, input field<br>text|



## **Colour Usage Rules** 

- The Primary Deep Blue (#003366) must appear on every screen as the primary visual anchor — in at least one of: the navigation bar, the header, a section background, or a prominent icon. 

- The Primary Gold (#FFCC33) is reserved for interactive elements that require user action. It must not be applied to passive or decorative elements to preserve its signalling value. 

- Body text must always be Dark (#1A1A1A) on White (#FFFFFF) or White (#FFFFFF) on Deep Blue (#003366) to maintain WCAG AA contrast ratios. 

- Avoid placing Gold text on White backgrounds — the contrast ratio (approximately 1.9:1) falls below WCAG AA requirements. Gold text is permitted only on Deep Blue backgrounds where contrast is sufficient. 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 3 of 24 

- Background surfaces should be #FFFFFF (white) for content cards and #F4F6FA (nearwhite) for page-level backgrounds to provide subtle depth. 

## **2.3 Typography** 

UniRush uses a two-family type system: a sans-serif for all UI text and a monospace for code, OTPs, and numeric identifiers. 

|App Name /<br>Wordmark|Arial|40pt / Bold|Splash screen, onboarding header|
|---|---|---|---|
|Page Title (H1)|Arial|24pt / Bold|Main screen headings|
|Section Heading<br>(H2)|Arial|18pt /<br>SemiBold|Card titles, drawer sections|
|Sub-Heading (H3)|Arial|16pt /<br>SemiBold|Item groupings, sub-sections|
|Body / Default|Arial|14pt /<br>Regular|Descriptions, labels, all body copy|
|Caption / Helper|Arial|12pt /<br>Regular|Field hints, timestamps, secondary<br>info|
|Button Text|Arial|14pt / Bold|All button labels — always<br>uppercase|
|OTP / ID Display|Courier New|20pt / Bold|OTP codes, student ID, plate<br>numbers|
|Price / Amounts|Arial|16pt / Bold|Fare displays, cart totals, wallet<br>balance|



## **2.4 Iconography** 

UniRush uses a consistent outlined icon style. Icons must be from the Material Symbols (Outlined) or a single agreed icon library — mixing icon styles is not permitted. Icons appear in Deep Blue (#003366) on white backgrounds and in White (#FFFFFF) on deep blue backgrounds. Gold icons are used exclusively for active or selected states. 

## **Icon Size Scale** 

- 16 dp — inline icons within text labels or chips 

- 20 dp — secondary action icons in list items 

- 24 dp — primary navigation and action icons (standard) 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 4 of 24 

- 32 dp — featured icons in empty states or confirmation screens 

- 48 dp — hero icons in splash screens and onboarding illustrations 

## **2.5 Spacing & Grid System** 

All spacing follows an 8 dp base grid. Component-level padding, margins, and gaps must be multiples of 8 dp (8, 16, 24, 32, 48, 64). The mobile layout uses a 4-column grid with 16 dp gutters. Minimum touch target size for any interactive element is 48 × 48 dp as per Material Design and iOS HIG guidelines. 

## **2.6 Border Radius** 

- Small components (chips, badges, toggles): 4 dp radius 

- Input fields and cards: 12 dp radius 

- Bottom sheets and modals: 20 dp radius (top corners only) 

- Primary CTA buttons: 28 dp radius (pill shape) 

- Full-bleed cards (rider job card, order tracker): 16 dp radius 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 5 of 24 

## **3. Component Library** 

The following components form the UniRush design system. Every screen in the application must be built exclusively from these components or documented extensions of them. Each component is specified with its visual properties, typography, colour, and interaction states. 

## **3.1 Button Components** 

|**Component**|**Colour / Style**|**Typography**|**Behaviour / States**|
|---|---|---|---|
|**Primary CTA**<br>**Button**|BG: #FFCC33<br>Text: #1A1A1A<br>Border: none|Arial 14pt Bold<br>UPPERCASE|Default, Pressed (0.85 opacity<br>+ scale 0.97), Disabled (30%<br>opacity). Used for: Create<br>Account, Log In, Place Order,<br>Confirm Booking, Accept Job.|
|**Secondary**<br>**Button**|BG: #003366<br>Text: #FFFFFF<br>Border: none|Arial 14pt Bold<br>UPPERCASE|Default, Pressed (opacity 0.9),<br>Disabled. Used for: Go Online,<br>Switch Mode, Dashboard<br>actions.|
|**Outline Button**|BG:<br>transparent<br>Text: #003366<br>Border: 1.5px<br>#003366|Arial 14pt Bold|Default, Pressed (BG:<br>#E8EEF5), Disabled. Used for:<br>Cancel, View Details, See<br>History.|
|**Destructive**<br>**Button**|BG: #D32F2F<br>Text: #FFFFFF<br>Border: none|Arial 14pt Bold|Danger actions only: Report,<br>Suspend, Raise Dispute.<br>Requires confirmation dialog<br>before execution.|
|**Text / Link**<br>**Button**|BG: none Text:<br>#003366<br>Underline on<br>hover|Arial 14pt Regular|Inline actions: Already a<br>member? Log In — New to<br>UniRush? Sign Up. No<br>minimum height restriction.|
|**Icon Button**|BG: varies<br>Icon: 24 dp|N/A|Circular hit target 48 dp.<br>States: default, active<br>(#FFCC33 icon), pressed<br>(ripple). Used in nav bars and<br>toolbars.|



UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 6 of 24 

## **3.2 Input Fields** 

|**Component**|**Colour / Style**|**Typography**|**Behaviour / States**|
|---|---|---|---|
|**Text Input**|BG: #FFFFFF<br>Border: 1px<br>#CCCCCC<br>Radius: 12 dp|Arial 14pt Regular<br>Label: Arial 12pt<br>Regular|States: Empty, Focused<br>(border: 2px #003366), Filled,<br>Error (border: 2px #D32F2F +<br>error message below),<br>Disabled.|
|**Password Input**|Same as Text<br>Input + eye<br>icon right|Same as Text<br>Input|Eye icon toggles visibility.<br>Show icon in #003366; active<br>(visible) state uses #FFCC33.|
|**Phone Input**|Country flag +<br>code prefix<br>(+256 Uganda<br>default)|Arial 14pt Regular|Auto-formats Ugandan<br>numbers. Numeric keyboard<br>on focus. OTP trigger on<br>submit.|
|**Search Bar**|BG: #F4F6FA<br>Border: none<br>Radius: 28 dp|Arial 14pt Regular<br>Hint: #AAAAAA|Prominent on Home screen.<br>Search icon (#003366) on left.<br>Clear (×) appears on input.<br>Expandable on mobile.|
|**Dropdown /**<br>**Select**|BG: #FFFFFF<br>Border: 1px<br>#CCCCCC<br>Chevron right|Arial 14pt Regular|Opens as bottom sheet on<br>mobile. University selector<br>uses searchable dropdown.<br>Options list with 48 dp row<br>height.|
|**OTP Input (6-**<br>**digit)**|6 × bordered<br>boxes BG:<br>#FFFFFF|Courier New 20pt<br>Bold Centered|Auto-advances on each digit<br>entry. Backspace clears<br>previous. Full row width, evenly<br>spaced. Delivery OTP is 4-digit<br>variant.|
|**Toggle / Switch**|Off: #CCCCCC<br>On: #FFCC33<br>Knob:<br>#FFFFFF|Label: Arial 14pt<br>Regular|Remember Details, Reminder<br>Me, Role Switcher<br>(CLIENT/AGENT). Animated<br>slide 250ms ease-in-out.|



UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 7 of 24 

## **3.3 Cards** 

|**Component**|**Colour / Style**|**Typography**|**Behaviour / States**|
|---|---|---|---|
|**Seller Card**|BG: #FFFFFF<br>Shadow: 0 2px<br>8px<br>rgba(0,0,0,0.08)<br>Radius: 12 dp|Name: Arial 14pt<br>Bold Meta: Arial<br>12pt Regular|Shows: seller photo/logo,<br>name, category tag, star<br>rating, estimated time,<br>delivery fee, open/closed<br>badge. Tap navigates to seller<br>menu.|
|**Menu Item Card**|BG: #FFFFFF<br>Radius: 8 dp|Name: Arial 14pt<br>Bold Price: Arial<br>16pt Bold<br>(#003366) Desc:<br>Arial 12pt #666666|Add to Cart button (gold, pill).<br>Out-of-stock state: greyed<br>out, no add button.|
|**Order Tracker**<br>**Card**|BG: #003366<br>Text: #FFFFFF<br>Radius: 16 dp|Status: Arial 16pt<br>Bold ETA: Arial<br>14pt Regular|Full-bleed top of home screen<br>when active order exists.<br>Pulsing animation on active<br>step indicator. Tap expands to<br>full tracker view.|
|**Rider Job Card**|BG: #FFFFFF<br>Left accent bar:<br>#FFCC33<br>Radius: 12 dp|Distance: Arial<br>18pt Bold<br>Earnings: Arial<br>16pt Bold #003366|60-second accept timer with<br>circular countdown. Decline<br>requires tap-and-hold to<br>prevent accidental rejection.|
|**Wallet /**<br>**Earnings Card**|BG: #003366<br>Text: #FFFFFF<br>Radius: 16 dp|Balance: Arial 28pt<br>Bold Currency:<br>Arial 16pt Regular|Gradient: #003366 to<br>#004D99. Shows available<br>balance, pending, and last<br>transaction. Withdraw button<br>(gold).|
|**Notification /**<br>**Alert Card**|BG: #FFF8DC<br>Left border: 4px<br>#FFCC33|Title: Arial 14pt<br>Bold Body: Arial<br>13pt Regular|In-app banners for order<br>updates, job alerts, policy<br>notices. Swipe to dismiss.|



## **3.4 Navigation** 

UniRush uses a bottom navigation bar with five tabs on the Client view. The Rider and Seller apps use simplified three-tab navigation. The navigation bar background is #003366 with active tab icons and labels in #FFCC33 and inactive items in rgba(255,255,255,0.6). 

- Client Bottom Nav: Home, Orders, Transport, Wallet, Profile 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 8 of 24 

- Seller Bottom Nav: Dashboard, Menu, Payouts 

- Rider Bottom Nav: Go Online, Wallet, Profile 

- Top App Bar: back chevron (left), screen title (centre), contextual action (right — Help, Search, or Menu) 

- Role Switcher: persistent chip at top of home screen for dual-role accounts — CLIENT MODE or AGENT MODE in contrasting gold/blue pill 

## **3.5 Modals & Bottom Sheets** 

- Confirmation dialogs: full-width bottom sheet with title, description, and two buttons (destructive action + cancel). Scrim overlay: rgba(0,0,0,0.5). 

- Order details sheet: scrollable, max 80% screen height. Drag handle at top. Close via drag down or tap scrim. 

- Policy consent sheet: full-screen modal with mandatory scroll before checkbox activates. Accept button in gold activates only after full scroll. 

- Rate & Review modal: 5-star selector (empty stars in #CCCCCC, filled in #FFCC33) + optional text comment field. 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 9 of 24 

## **4. Screen Flows & Specifications** 

## **4.1 Onboarding & Authentication** 

All users enter UniRush through a shared onboarding gateway before diverging into role-specific flows. The onboarding experience is designed for speed — clients and student agents are approved within minutes. 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
|**Splash Screen**|Centered UNIRUSH wordmark<br>on #003366 background.<br>Animated motorcycle icon.<br>Gold download arrow button.<br>Tagline: 'Quick Safe<br>Convenient'.|2-second auto-advance to Role<br>Selection. First launch only —<br>subsequent launches go<br>directly to Login.|
|**Role Selection**|Grid of 5 role cards (Client,<br>Seller, Boda Rider, Car Owner,<br>Student Agent). Each card:<br>icon + role name + one-line<br>description. Multi-select<br>supported.|Student Agent card includes<br>note: 'Register as Client first'.<br>Selection state: card border<br>turns gold. Continue button<br>activates after one selection.|
|**Phone Number Entry**|Uganda flag + +256 prefix. 9-<br>digit number field. 'Send OTP'<br>primary CTA button.|Numeric keyboard auto-opens.<br>Real-time formatting applied.<br>OTP sent via SMS. Field<br>validates on blur.|
|**OTP Verification**|6-box OTP input. 60-second<br>resend timer. 'Resend OTP'<br>link activates after timer.|Auto-advance per digit. Shake<br>animation + red border on<br>wrong OTP. Success animates<br>to next step.|
|**Create Password**|Password field + confirm field.<br>Strength indicator bar (red /<br>amber / green). Requirement<br>checklist below.|Show/hide toggle on each field.<br>Next button activates only<br>when strength ≥ Medium and<br>fields match.|
|**Profile Photo Upload**|Camera capture or gallery<br>picker. Square preview with<br>circular crop guide. 'Looks<br>good' and 'Retake' options.|Photo must show face clearly.<br>Minimum 200 × 200 px. Upload<br>progress indicator. Auto-<br>compress > 5 MB.|
|**Registration (Screen**<br>**shown in mockup)**|Email, Unique Student ID,<br>Password fields. Social sign-in:<br>Google, Facebook, Twitter.<br>'Remember Details' toggle.|Social login populates email<br>field. Fields show inline<br>validation. Student ID auto-<br>formats per university pattern.|



UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 10 of 24 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
||'Create Account' CTA. 'Already<br>a member? Log In' link.||
|**Login Screen**|Student ID / email field.<br>Password field. 'Reminder Me'<br>toggle. 'LOG IN' CTA in gold.<br>Social login icons. 'New to<br>UniRush? Sign Up' and 'Forgot<br>Password?' links.|Biometric prompt offered on<br>supported devices after first<br>login. Incorrect credentials<br>show inline error after 1<br>attempt; lockout warning after<br>5.|
|**Forgot Password**|Phone number entry → OTP →<br>New password flow. Top bar:<br>back arrow + 'Forgot<br>Password?' title.|3-step indicator shown at top.<br>OTP for password reset<br>expires in 10 minutes.|
|**Role-Specific**<br>**Verification**|Dynamic form fields per role.<br>Progress indicator at top.<br>Document upload cards with<br>camera / file picker.|Document cards show:<br>pending (grey), uploaded<br>(green tick), rejected (red ×).<br>Inline rejection reason<br>displayed.|
|**Account Under**<br>**Review**|Illustration + 'Your account is<br>being reviewed' heading.<br>Estimated wait time. 'Notify me<br>when approved' toggle.|Push notification sent on<br>approval or rejection. Rejection<br>includes reason + retry link.|



## **4.2 Client Home & Ordering** 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
|**Client Home Screen**|Top: delivery zone chip +<br>search bar. Order Tracker card<br>(if active). Category tiles: Food<br>& Drinks, Shopping, Transport,<br>Other. Nearby Sellers list. Role<br>Switcher chip (if Agent role<br>active).|Order Tracker card animates in<br>when order is placed. Category<br>tiles use outlined icons on<br>white cards. Sellers sorted by<br>rating × proximity score.|
|**Seller Browse**|Header: category name + filter<br>icon. Seller cards list (rating,<br>ETA, delivery fee,<br>open/closed). Filter bottom<br>sheet: sort by rating / price /<br>distance, open now toggle.|Closed sellers shown at bottom<br>with 'Closed' badge. Busy<br>sellers show increased ETA.<br>Tap seller card → Seller Menu.|
|**Seller Menu**|Sticky seller header (logo,|Out-of-stock items greyed, add|



UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 11 of 24 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
||name, rating, hours). Menu<br>grouped by category. Item<br>cards with photo, name, price,<br>add button. Cart FAB with item<br>count badge.|button replaced with 'Out of<br>Stock'. Special instructions field<br>appears on each item add.<br>Cart FAB pulses on first add.|
|**Cart Review**|Itemised list with quantity<br>controls. Seller fee breakdown:<br>subtotal, delivery fee, service<br>fee, promo discount, total.<br>Promo code field. 'Set Delivery<br>Location' and 'Place Order'<br>buttons.|Minimum order value enforced<br>(shown inline if not met).<br>Promo code validates in real-<br>time. Delivery fee updates<br>when location changes.|
|**Delivery Location**|Map view with draggable pin.<br>Saved locations list (Home,<br>Hostel, Campus). Add new<br>location. Rider instructions text<br>field.|Map centres on campus gate<br>by default. Geofence alert if<br>location set outside service<br>zone. Saved locations editable<br>from Profile.|
|**Order Confirmation**|Order summary, seller name,<br>estimated time. Payment<br>method selector (MTN MoMo,<br>Airtel Money, Wallet, Card).<br>'Confirm & Pay' gold button.|Payment held in escrow —<br>confirmation screen notes this.<br>Escrow release explained in<br>one-line helper text.|
|**Live Order Tracker**|Step progress bar: Placed →<br>Confirmed → Preparing →<br>Picked Up → On the Way →<br>Delivered. Map with rider's live<br>dot. ETA chip. In-app chat<br>button. SOS button.|Rider's name, photo, and plate<br>displayed after pickup. Map<br>auto-pans to rider position.<br>Push notification on each step<br>change.|
|**OTP Handoff Screen**|Large 4-digit OTP display<br>(Courier New, 32pt).<br>Instructions: 'Share this code<br>only when you have received<br>your order'. Timer: 30-minute<br>dispute window countdown<br>starts after OTP entry.|OTP must not be shared<br>before physical receipt —<br>reminder displayed<br>prominently. OTP entry on rider<br>side triggers payment release.|
|**Rate & Review**|Separate rating widgets for<br>Seller (food quality, packaging)<br>and Rider (speed,<br>professionalism). 5-star<br>selectors + optional comment<br>field. 'Submit' and 'Skip'<br>buttons.|Skip allowed but prompted<br>once. Ratings stored<br>immediately on submit.<br>Aggregate shown on next<br>seller/rider view.|



UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 12 of 24 

## **4.3 Transport Flow** 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
|**Transport Home**|Two vehicle type cards: Boda<br>(quick solo trips) and Car<br>(groups / longer distance). Map<br>background with nearby riders<br>as dots.|Car card shows passenger<br>capacity. Boda card shows<br>helmet requirement reminder.|
|**Set Pickup &**<br>**Destination**|From / To input fields with<br>swap button. Suggested recent<br>locations. Map preview with<br>route. Estimated fare chip.|Fare shown before<br>confirmation — no surprises.<br>Student Agent vehicles labelled<br>distinctly.|
|**Driver / Rider Preview**|Driver photo, name, star rating,<br>vehicle plate, vehicle photo,<br>ETA. 'Confirm Booking' and<br>'Cancel' buttons.|Plate number shown<br>prominently — C6 policy<br>reminder: board only if plate<br>matches.|
|**In-Trip Tracker**|Live map with vehicle position.<br>In-app chat button. SOS panic<br>button (prominent, red). Fare<br>meter (car only).|Phone numbers never<br>displayed. SOS sends GPS to<br>platform emergency team +<br>next of kin.|
|**Trip Completion**|Fare receipt breakdown. Rating<br>prompt. 'Rate your Driver' 5-<br>star widget.|Auto-deducted from registered<br>payment method. Receipt<br>shareable as PDF.|



## **4.4 Seller Dashboard** 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
|**Seller Dashboard**<br>**Home**|Store status toggle (Open /<br>Closed / Busy). Live order<br>panel with audio alert. Today's<br>revenue summary card. Quick<br>stats: total orders, avg rating.|Audio alert configurable in<br>settings. Busy mode shows<br>increased ETA to clients<br>without stopping orders.|
|**Incoming Order Alert**|Full-screen modal: order<br>details, client zone, item list,<br>order value, estimated prep<br>time. 3-minute countdown.<br>Accept / Decline buttons.|Countdown timer displayed<br>prominently. Decline requires<br>reason selection from<br>predefined list. Auto-decline if<br>no response.|
|**Order Management**|Active orders: tabbed list<br>(Preparing, Ready, Picked Up).|'Mark Ready' button per order<br>— triggers rider dispatch. QR|



UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 13 of 24 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
||Per-order card: items, client<br>zone, rider name (after<br>assignment), timer.|code display for rider scan.|
|**Menu Management**|Category accordion list. Item<br>toggle (available / out of stock).<br>Edit item: photo, name, price,<br>description, category, stock<br>status.|Bulk stock toggle per category.<br>Price update reflects<br>immediately on client app.|
|**Payout & Sales**|Wallet balance. Daily payout<br>schedule reminder (8:00 AM).<br>Transaction history table. Sales<br>chart (today / weekly / monthly<br>toggle).|Disputed amounts shown<br>separately. URA receipt<br>download per transaction.|



## **4.5 Rider / Agent App** 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
|**Go Online Screen**|Large 'Go Online' toggle button<br>(gold). Zone selector. GPS<br>confirmation indicator.<br>Estimated nearby orders count.|GPS must be enabled to go<br>online. Student Agents shown<br>campus zone boundary on<br>map.|
|**Incoming Job Alert**|Full-screen takeover: seller<br>location, distance, item type,<br>estimated earnings, 60-second<br>circular countdown timer.<br>Accept / Decline.|Tap-and-hold to decline<br>(prevents accidental rejection).<br>Job cascades to next rider if<br>not accepted.|
|**Navigation to Seller**|In-app map with turn-by-turn<br>directions. Seller name and<br>distance ETA. 'Arrived at Seller'<br>button.|QR scanner activates on seller<br>arrival. Seal inspection prompt<br>before confirming pickup.|
|**Delivery Navigation**|Map to client. Order contents<br>summary. 'OTP Entry' field at<br>destination. SOS button.|Client location visible only<br>during active delivery.<br>Geofence alert if rider leaves<br>expected corridor.|
|**Agent Wallet**|Balance display (large, gold<br>card). Withdraw button.<br>Earnings breakdown: base +<br>distance + surge. Transaction<br>history.|Minimum withdrawal UGX<br>2,000 enforced. Withdrawal to<br>registered MoMo number only.|



UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 14 of 24 

|**Screen / State**|**UI Elements**|**UX Notes**|
|---|---|---|
|**Role Switcher (dual-**<br>**role)**|CLIENT MODE / AGENT<br>MODE chip at top of home.<br>Tap to switch — confirmation<br>dialog if active order / active<br>delivery pending.|Mode switch pauses the other<br>role's active activity. Visual<br>indicator changes entire app<br>chrome colour: blue for agent,<br>white for client.|



UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 15 of 24 

## **5. Interaction Design & Micro-Interactions** 

## **5.1 Loading States** 

- Skeleton screens: used on initial data load for home feed, seller list, and order history. Skeleton shapes mirror the real content layout, with animated shimmer (#E8EEF5 → #F4F6FA). 

- Spinner: used for point-action loads (payment processing, OTP sending, account submission). Spinner colour: #003366. 

- Progress bars: used for multi-step uploads (profile photo, document verification). Bar fill: #FFCC33 on #E8EEF5 track. 

- Button loading state: text replaced with spinner inside the button. Button remains full size to prevent layout shift. 

## **5.2 Error States** 

- Inline field errors: red (#D32F2F) border + error text below field. Icon: exclamation circle in red. 

- Full-screen errors: illustration + heading + description + retry CTA. Used for: network failure, server error, session expired. 

- Empty states: illustration + heading + CTA. Used for: empty cart, no orders yet, no jobs available. Illustration uses Deep Blue and Gold palette. 

- Toast notifications: bottom-anchored snackbar, 3-second auto-dismiss. Success: green left accent. Error: red left accent. Info: gold left accent. 

## **5.3 Animations & Transitions** 

- Screen transitions: horizontal slide for forward navigation; reverse slide for back navigation. Duration: 300ms ease-in-out. 

- Bottom sheet: slide-up from bottom, 250ms ease-out. Scrim fades in simultaneously. Drag-to-dismiss with spring physics. 

- Card press state: scale(0.97) + shadow reduction, 100ms ease-in. Release: scale(1.0), 150ms ease-out. 

- Toggle switch: knob slides 250ms ease-in-out. Colour transitions simultaneously. 

- 60-second job timer: circular SVG arc depletes clockwise. Colour shifts from gold to red in final 15 seconds. 

- OTP digit entry: each box scales briefly to 1.08 on digit entry, 80ms spring animation. 

## **5.4 Haptic Feedback (Mobile)** 

- Light haptic: button taps, toggle activations, digit entry in OTP field 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 16 of 24 

- Medium haptic: successful order placement, successful payment, successful delivery confirmation 

- Heavy / error haptic: wrong OTP entry, payment failure, policy violation alert 

- SOS button: three rapid strong pulses on activation to confirm the alert was sent 

## **5.5 Accessibility** 

- All interactive elements must have a minimum touch target of 48 × 48 dp. 

- Colour contrast: minimum WCAG AA (4.5:1 for normal text, 3:1 for large text and UI components). 

- All images must carry descriptive alt text. Icons used without text labels must carry accessible name attributes. 

- Focus order must follow a logical visual reading order. Tab sequence must not trap keyboard focus. 

- Screen reader support: VoiceOver (iOS) and TalkBack (Android). Dynamic role announcements on mode switch and order status change. 

- Text scaling: UI must remain usable at 200% system font size. Avoid fixed-height text containers. 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 17 of 24 

## **6. Responsive Design & Breakpoints** 

## **6.1 Mobile Layout (Primary)** 

The UniRush mobile experience is the primary design surface. All screen designs begin at 375 dp width (iPhone SE / compact Android baseline). The layout uses a single-column structure with bottom navigation. 

- Content margin: 16 dp on both sides 

- Section padding: 24 dp top and bottom 

- Card gap in list views: 12 dp 

- Bottom navigation height: 64 dp + safe area inset 

- Top app bar height: 56 dp + status bar height 

## **6.2 Tablet Layout (≥ 600 dp)** 

- Navigation shifts to rail (left-side icon nav) on tablets ≥ 600 dp width 

- Content uses a two-column grid for seller cards and menu items 

- Map views show split-panel: map left, order/driver details right 

## **6.3 Web / Desktop (sellers.unirush.ug)** 

The Seller Dashboard web version uses a persistent left sidebar navigation. Content area uses a 12-column grid with 24 px gutters. Maximum content width: 1280 px. Below 768 px, the layout collapses to the mobile single-column view. 

## **6.4 Rider App — Low Data Mode** 

The Rider App is explicitly optimised for low-data conditions common on Ugandan mobile networks. Design requirements for the Rider interface include: no auto-loading images (image loads are user-triggered); map tiles use the lowest resolution data layer; text remains legible at brightness extremes (outdoor sunlight); and offline state is clearly communicated with a banner indicating the last sync time. 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 18 of 24 

## **7. Notification Design** 

## **7.1 Push Notification Templates** 

|Order Accepted by<br>Seller|Your order from [Seller Name] has<br>been confirmed! Preparing now.|Open order tracker|
|---|---|---|
|Rider Assigned|[Rider Name] is on the way to pick up<br>your order.|Open live tracker|
|Rider Picked Up|Your order has been picked up and is<br>heading to you!|Open live tracker|
|Delivery Arriving|Almost there! Your delivery is 2<br>minutes away.|Open OTP screen|
|Incoming Job (Rider)|New job nearby: UGX [amount] —<br>[distance] km. 60 seconds to accept!|Open job card|
|Account Approved|Your UniRush account is ready. Start<br>ordering now!|Open home|
|Payout Processed|UGX [amount] has been sent to your<br>MoMo. Check your wallet.|Open wallet|
|Dispute Resolved|Your dispute for Order #[ID] has<br>been resolved. [Refund/No refund]<br>applied.|Open order history|



## **7.2 In-App Alert Banners** 

- Green banner: success states (payment received, account approved, OTP confirmed) 

- Gold banner: informational notices (surge pricing active, seller busy, zone restriction) 

- Red banner: errors and warnings (payment failed, account suspended, geofence breach) 

- All banners auto-dismiss after 4 seconds unless the user taps to expand. 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 19 of 24 

## **8. Security & Trust UX** 

## **8.1 Trust Signals** 

UniRush operates in a context where users are making financial transactions and sharing personal data. The interface must actively reinforce trust at key moments. 

- Verified badge: blue tick adjacent to seller names and rider names after verification. Badge tooltip: 'Identity verified by UniRush'. 

- Escrow notice: shown on the payment confirmation screen — 'Your payment is held safely until delivery is confirmed.' 

- Plate number prominence: during transport booking, the assigned vehicle plate is displayed at 20pt Bold. Instruction: 'Only board if this plate matches the vehicle in front of you.' 

- In-app messaging only: a banner in every chat thread reads 'UniRush never asks you to communicate outside the app.' 

- Data privacy notice: a persistent footer link on all account and location screens links to the UniRush Privacy Policy (PDPA 2019 compliant). 

## **8.2 SOS & Emergency UI** 

The SOS panic button is a critical safety element. It must be visually prominent but not accidentally tappable. 

- Design: red circular button (48 × 48 dp minimum, 56 × 56 dp recommended), shield icon, labelled 'SOS'. 

- Activation: tap-and-hold 1.5 seconds to activate (prevents accidental triggers). Countdown ring appears on hold. 

- On activation: full-screen red overlay with 'HELP IS ON THE WAY'. GPS location sent to platform emergency team and registered next-of-kin contact. 

- Location: persistently visible on all active delivery and active trip screens. Also accessible from the profile menu. 

## **8.3 Fraud Prevention UI** 

- OTP screen: bold warning — 'Do not share this code until you have physically received your order.' Warning repeated in the order tracker. 

- Dispute honesty prompt: before submitting a dispute, user must confirm: 'I confirm this information is accurate and that providing false information may result in account suspension.' 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 20 of 24 

- Duplicate account detection: if a phone number or student ID is already registered, the registration flow shows a specific error with an account recovery option rather than allowing a duplicate. 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 21 of 24 

## **9. Design Handoff & Engineering Guidelines** 

## **9.1 Asset Delivery Format** 

- All icons exported as SVG at 24 × 24 dp and 48 × 48 dp viewBox. 

- Illustrations exported as SVG (preferred) or PNG at 3× for standard icons and 2× for large illustrations. 

- Colours delivered as design tokens in JSON format compatible with Style Dictionary, covering HEX, RGBA, and HSL variants. 

- Typography tokens include: font-family, font-size (in sp/rem), font-weight, line-height, letter-spacing. 

## **9.2 Design Token Naming Convention** 

- color.brand.primary — #003366 

- color.brand.accent — #FFCC33 

- color.neutral.white — #FFFFFF 

- color.neutral.text — #1A1A1A 

- color.feedback.error — #D32F2F 

- color.feedback.success — #2E7D32 

- color.feedback.info — #FFCC33 (same as accent in info context) 

- spacing.xs — 4 dp; spacing.sm — 8 dp; spacing.md — 16 dp; spacing.lg — 24 dp; spacing.xl — 32 dp; spacing.2xl — 48 dp 

- radius.sm — 4 dp; radius.md — 12 dp; radius.lg — 20 dp; radius.pill — 28 dp 

## **9.3 Accessibility Checklist (Pre-Launch)** 

1. Verify all text colour combinations against WCAG AA contrast checker 

2. Confirm 48 × 48 dp minimum touch targets on every interactive element 

3. Test with TalkBack (Android) and VoiceOver (iOS) — all screens must be fully navigable 

4. Test at 200% system font scale — no content truncation or overflow 

5. Confirm all error states are communicated via colour AND text (not colour alone) 

6. Verify focus order is logical on all screens with keyboard / switch access 

7. Confirm SOS button is reachable within 2 taps from any active delivery screen 

## **9.4 Version Control & Change Management** 

This document is version-controlled alongside the Figma design file. Any change to a component, colour token, or screen specification must be logged in the Change Register below and reviewed by the Product Lead and Lead Designer before the engineering sprint begins. 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 22 of 24 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 23 of 24 

## **10. Glossary** 

The following terms are used throughout this document with the meanings defined below. 

|**CTA**|Call to Action — a button or link that directs the user to perform a<br>specific action|
|---|---|
|**dp**|Density-independent pixels — the unit used for layout dimensions in<br>Android; equivalent to pt on iOS|
|**sp**|Scale-independent pixels — the unit used for font sizes in Android;<br>scales with system font settings|
|**WCAG AA**|Web Content Accessibility Guidelines Level AA — the minimum<br>accessibility compliance target for UniRush|
|**Design Token**|A named variable storing a design decision (colour, size, spacing)<br>used across code and design tools|
|**Bottom Sheet**|A modal panel that slides up from the bottom of the screen, used for<br>confirmations and option lists|
|**Skeleton Screen**|A placeholder UI that mirrors content layout while data is loading,<br>reducing perceived wait time|
|**Escrow**|Payment held by the platform between order placement and delivery<br>confirmation|
|**OTP**|One-Time Password — the 4-digit code used at delivery handoff to<br>confirm receipt|
|**Role Switcher**|The in-app toggle allowing a student with dual roles to switch<br>between Client and Agent mode|
|**Geofence**|A virtual GPS boundary; alerts are triggered if a rider leaves the<br>expected delivery area|
|**Haptic**|Physical vibration feedback from the device motor, used to confirm<br>interactions|
|**SOS**|Emergency panic button — sends the user's GPS location to the<br>platform emergency team and next of kin|
|**MoMo**|Mobile Money — MTN MoMo or Airtel Money, the primary payment<br>methods on the platform|



## **DESIGNED BY:** UniRush Design & Product Team 

UniRush UI/UX Design Documentation  |  Version 2.0  |  June 2026  |  Page 24 of 24 

