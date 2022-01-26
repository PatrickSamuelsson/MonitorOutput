
// Input file

title = 'Surface maps'

framec='Teal'

v[0] = ['m']
t[0] = v[0]
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000']
t[2] = ['ALL']
v[3] =['ALL','METCOOP','Norway','Sweden','Finland','Estonia','Denmark','METCOOPMountain','NorwayMountain','NorthNorway','WestNorway','EastNorway','Gotaland','Svealand','Norrland','FinlandLand','FinlandSouth','FinlandNorth','FinlandInlandWind','NorwayInlandWind','SwedenOpenLandWind','SwedenForest','GermanyNorthern','PolandNorthern'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','GX','DD','TT','TTP1','TTP2','TTHA','TN','TX','TD','RH','RHP1','RHP2','QQ','TDD','NN','PE1','PE12','VI']
t[4] = ['Mslp','U10m','Max Wind Gust','Wind direction','T2m','T2m 1 patch','T2m 2 patch','T2m, height corr.','Min T2m','Max T2m','Td2m','Rh2m','Rh2m 1 patch','Rh2m 2 patch','Q2m','Td2m deficit','Cloud cover','1h Precipitation','12h Precipitation','Visibility']
v[5] =[0]
v[5] =v[5].reverse()
t[5] =v[5]
v[6] =['newsurf','oldsurf']
t[6] =v[6]
v[7] =['00','06','12','18'] ;
t[7] = v[7] ;
v[8] = ['b','r'];
t[8] = ['Bias','Rmse'];
v[9] =['ALL'] ;
t[9] = v[9] ;

spec_name =[0,8,1,2,3,9,7,6,4,5]

mname = ['Type','Period','Station','Selection','Parameter','Level','Exp','Hour','Error','Initial time']
loc =['l','l','t','t','t','l','l','l','l','l','l']
do_debug = false ;
pdir ='Surface/'
ext='1.png'
help = 'newsurf: cy46h newsurf+SEKF       <br> oldsurf: cy46h oldsurf+OI      '; hide_help = false ;
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']

