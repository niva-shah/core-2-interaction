document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.getElementById('text-container');

    const text1 = `
    This quiet roof, where dove-sails saunter by,
    Between the pines, the tombs, throbs visibly.
    Impartial noon patterns the sea in flame --
    That sea forever starting and re-starting.
    When thought has had its hour, oh how rewarding
    Are the long vistas of celestial calm!
    What grace of light, what pure toil goes to form
    The manifold diamond of the elusive foam!
    What peace I feel begotten at that source!
    When sunlight rests upon a profound sea,
    Time's air is sparkling, dream is certain --
    Pure artifice both of an eternal Cause.
    
    Sure treasure, simple shrine to intelligence,
    Palpable calm, visible reticence,
    Proud-lidded water, Eye wherein there wells
    Under a film of fire such depth of sleep --
    O silence! . . . Mansion in my soul, you slope
    Of gold, roof of a myriad golden tiles.
    
    Temple of time, within a brief sigh bound,
    To this rare height inured I climb, surrounded
    By the horizons of a sea-girt eye.
    And, like my supreme offering to the gods,
    That peaceful coruscation only breeds
    A loftier indifference on the sky.
    
    Even as a fruit's absorbed in the enjoying,
    Even as within the mouth its body dying
    Changes into delight through dissolution,
    So to my melted soul the heavens declare
    All bounds transfigured into a boundless air,
    And I breathe now my future's emanation.
    
    Beautiful heaven, true heaven, look how I change!
    After such arrogance, after so much strange
    Idleness -- strange, yet full of potency --
    I am all open to these shining spaces;
    Over the homes of the dead my shadow passes,
    Ghosting along -- a ghost subduing me.
    My soul laid bare to your midsummer fire,
    O just, impartial light whom I admire,
    
    Whose arms are merciless, you have I stayed
    And give back, pure, to your original place.
    Look at yourself. . . But to give light implies
    No less a somber moiety of shade.
    
    Oh, for myself alone, mine, deep within
    At the heart's quick, the poem's fount, between
    The void and its pure issue, I beseech
    The intimations of my secret power.
    O bitter, dark, and echoing reservoir
    Speaking of depths always beyond my reach.
    
    But know you -- feigning prisoner of the boughs,
    Gulf which cats up their slender prison-bars,
    Secret which dazzles though mine eyes are closed --
    What body drags me to its lingering end,
    What mind draws it to this bone-peopled ground ?
    A star broods there on all that I have lost.
    
    Closed, hallowed, full of insubstantial fire,
    Morsel of earth to heaven's light given o'er --
    This plot, ruled by its flambeaux, please me --
    A place all gold, stone, and dark wood, where shudders
    So much marble above so many shadows:
    And on my tombs, asleep, the faithful sea.
    
    Keep off the idolaters, bright watch-dog, while --
    A solitary with the shepherd's smile --
    I pasture long my sheep, my mysteries,
    My snow-white flock of undisturbed graves!
    Drive far away from here the careful doves,
    The vain daydreams, the angels' questioning eyes!
    
    Now present here, the future takes its time.
    The brittle insect scrapes at the dry loam;
    All is burned up, used up, drawn up in air
    To some ineffably rarefied solution. . .
    Life is enlarged, drunk with annihilation,
    And bitterness is sweet, and the spirit clear.
    
    The dead lie easy, hidden in earth where they
    Are warmed and have their mysteries burnt away.
    Motionless noon, noon aloft in the blue
    Broods on itself -- a self-sufficient theme.
    O rounded dome and perfect diadem,
    `;

    const text2 = `
****:***:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.::::::::::::::.:.::.::::::::::::::.:::::::::::::::::::::::::
****:::::::::::::::::::::::::::::::::::::::::::::::::::::..:::::::..:....::.::......:.::::...:::::..:..:..:..::.:::::::..:.:::::
***::::::::::::::::::::::::::::::...:::::.:::..:.:..........::::::.::...:.:.:..:.....::.:.........................:::::::...::::
**:::::T***H:::::::::::::::::::::::::::...:.::...:::....:.:.:::::...:.....:............::......:::......:...:::...:::::::.::..::
*:::::::*E:*:::::::::::::::::::::::::::::**WI......N*:::::::::::::.::..::...:::.::::..:.........::::....::.....::.::::::.:::::::
**::::::DR:*:::::::::::::::::::::::I:............:::*:..*...:.:::...::..:.......:............:..:.....:.::.....:....:::..:::..::
***:*::::S.::::::::::::.........E...............:::...::S..!:::::.::..:................................:.:..:...:::....:::::.:::
*::::*:*:*:*:::::::::.......I...............WE:M:US:...:.*...:.*..:..::..................................:.:::::::.:::::::::::::
*:::T:::.:.*::::.:::::...::........*:.:...T*.:R:*YTO:.::***L:I:::.::.::::................................:::::::::::::::::::::::
********::*::*::::::...V.........:**:*E!T:HEIMMENS:*E..**::.:*.A*:::::...........................::::..:::::::::::::::.:::::::::
***IR*:****:*::::::::V.........**:*:.::OPENSANDCLOS..::*E:*.:.::::::.............:..............:::.::::::::::::::::::::::::::::
***SM***B:::*:::::O..........::.::*OK*THEPOWDERWAVEDA:::.R.*..:.....E:.**...................:....:::::::::::::::::::::::::::::::
*******S::****::::...........TOSPR*INGFROMTHEROCKS!FLY:AW*::*:*..**A:*:.::......................::.:::::::::::::::::::::::::::::
****Y***********.............DAZZLEDPAGES!BREAKUPWAVES!:..::.:*.::..B....*:........................:::::::::::::::::::::::::::::
*************R:...............:EAKWITHREJOICINGWATERSTH*...I*.*SQ..::..:.U.I:............................:.:...:.....:::::::::::
ET*******RO:.:....................:O::FWHERETHEJIBSPECK:*.:*::::.::..*:ED!..:::.:.:....................................:.:.:.:.:
FFFFFFVFV:::.:::....::I*......I...:II:VFNVNIFV:NFNFFF:......:.:*:I:..I:**I..:..................................................:
*IVV*::.:.:...::I:::I*:...:..::::V:..FNI.V*INFIFFFFF:.........:I..::*.*.::*:::..:..............................................:
:::::::::*:...:*::.:I::*I.:*.*I::II.:.:.:VFF*FFNNVFF...:...........*I****...:.....................................:..........*..
:::*I***I*V:*FFV*::.***:I.*:.****I:::*::.:.*I*:NNVFI:................:.:..:::::..::.........:......................:.:.....*....
:::::*V**I*:.NFNIFNV:::*IV*.::FNVNVFIN**:I*FVFNFNFV::...:..:.::.::.::..:::.::...:...............:.....:.................:*.....:
::I***::I*:*:IVFVNFVV.:I**:*...VF*:FVFIVVVVF:NFINNFI........::.....::...............................::........:......:........:*
:V****INF*:*V*V*FINNF:**I*::I:*.IIIFNFNFNVVIFNFFNNFV........:.........................::...:.............:.:.:::......I........:
::*:IV::FNVVNNIFFFF:*IV::*VFN*II..*INNFNFFFNVVFVNNNVI::::::.:::::..:::...:....:.:...::.:........:::..:::::::::::.I..I......I*:*:
I:*NVNV:*V*VNFFFFFVV*:FFFIFFFI*:*N**VVNFNNN**NFIINNF.V:::::::::::::.:.:.:::.::::.::.:::::::::::::::::::::::::::*:.*I.......:.VV*
I::::::I:I**VFFI*NIFF*FVNVV:FNFFVIFFFFFVN*......*VFFNFF:::*::::::::::::::::::::::::::::::::::*:::***********IIFFI*......II*::VVN
**::*II:::..*:IINNFFFFFFVFFNFFFNFVVFF*FF:...........N*NVI*I************.************************IIIIIIIIII*FVVFI.........I..IFFF
****I*:I*:*I**I:*IVINFFFFNVFFNFVFVFIIF...............IVNFIII:IIII**IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIVVVIIIIIFV*FV.......**:F:VFVFFF
*I****I:::I*V*:F:I:**IIVIVFN*IFNVVIF........I:.......***FFFVIVIIVVVIVIVVIIIVVVIII:*IIIIIIIVIVVVVVVVVVVVFFVVV....*.:.:VIFFFFFNNN*
***NNNVNF*NFIII*I**I:I::I*I*::*VF*.........***I:.......:..*NFIIVVVVVVVVVVVVVVVV.....IIIVVVVVVVVVVVVIVVII:*...*:.:..VFVFFFFF::::.
:::FNVFVNIVFFFI*II*I**IIFFF*F:..........:**I:*..........::.....VVVVVVVVIVVVVI......:..*VVVVVVVVVFF*::*I........VVFINFFF:.:VF....
:::FFNFNFFFFNIFI*:I*V*::V:.........:::.I:.*:I*.**..:....:*.V:.:.VVVVVVVV**:*IFFN.IFFVI.:VFF*:*::*V...**.I*.VI*IVV:.:.:VVV..:.::
:::::::*FFNFVI:..........:..........I:..:**.I...::*..:::....II*.....IFNNNNNNNN*VVVVVFVVFVVFFVV:.....**VVVVVV*..:....*VV:.:::::::
:::.:::::..:....::......:V::::..II.I*II::::.I:I..*.*:VV.::..IIVF.:VI:.*...*:.:*II***::.......*I.FIF***..:::::.:VFFVII.::::::IVFF
::::*****:......I::.....:*I::::..::::*:......:::..FVVF*F*:*F..IVFV:V**:FF*::.........:............:::..FFFFFFFFFFF..:::::FFVVFFV
::::::I***I*.I.*:::.I..*I*:.*.I.......*.I*:..*::..*:F*:*I:*:V...*FFIFFFV*FFV::.....:..::...*.:..::**:.VVVFVVVVVI....:IFNNNNNNFI*
:::::::::.**::::::.*NV.I:.I*:*:..:V.:::::..::I.**..FNFVNI**FFV:V...*FNNFFIINFF::::.:I*::.:::::VFVVVVI*:*VNNFF*..:::::::::*VVFFFN
::::::*V:I*VF*IFV*NVFFI:**::.VI::::*.::I.:*.:.I:*:..FNFFFFV*IIV:*FVVIV.INFFFIFFNFI::..FFFFI::VNNFFI:*IIVFFV..:::::::VNNNNFVFNV**
::::FVVFF*NNFFNNNNFFV::I::.I*I::.....:*::VF.FF*::*:..:VNFFNFF***III:II:*V*::IFNFFNNFFF*:.IFNFFFFFFFFFFVI......:.:::*I::..:VFFFFF
:::NNVFVFNNFNFNFVV::*V*F.FNVN:I:::*IV:::.IFFNVIVI.:::..NNFFFNVN*II**IIVIVIV***********IIIV:FVIF*VFIV.....:*VFFFFFFFFFNNNFFFFFFFF
::NFVNFVIN*VFN*NNIIFINVFNNINVNN:.::..........FNN:VVF.....:NFFFNNVF*I:::::*IIIIIV***********:**I*...::::**I:IFNNFNNNNNNF*::IIVFNN
::NVFFNVNFNVNNVNNNVNNIFNFVNFNN**:::IVNN.I.FN*IIINIVNNI:V:...VNNFNFNFNV**::::::::::::::*II*....:FNFFNNNFFFNNNNNF:.......:::::::..
.:NINNVFFFNIFNVNFNVNFVNNNVNVNNF:::IN:*V**NI:V::VFIFNNNFV***I:...:VFFFNNFFFNNNNNNNV:.......:::......::::....:::::::::YRREBRAP*NAI
`;

// Function to switch texts
function switchText() {
    // Toggle between two texts
    if (textContainer.textContent.trim() === text1.trim()) {
        textContainer.textContent = text2;
    } else {
        textContainer.textContent = text1;
    }
}

// Initial switch
switchText();

// Set interval for switching texts every 10 seconds
setInterval(switchText, 500);
});