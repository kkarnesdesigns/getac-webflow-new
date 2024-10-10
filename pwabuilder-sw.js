const CACHE_NAME = 'getac-cache-staging-v2'
const CACHED_URLS = [
'/',
'/pwabuilder-sw.js',
'/manifest.json',
'/ajax.googleapis.com/robots.txt',
'/ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
'/get-in-touch.html',
'/index.html',
'/industries.html',
'/products.html',
'/settings.html',
'/video-solutions.html',
'/videos.html',
'/css/getac.3a1056150.css',
'/images/0221_b360-pro_9-p-1080.png',
'/images/0221_b360-pro_9-p-500.png',
'/images/0221_b360-pro_9-p-800.png',
'/images/0221_b360-pro_9.png',
'/images/140_getac_publicworks-all_q0a6265_vgps_kv-p-500.png',
'/images/140_getac_publicworks-all_q0a6265_vgps_kv-p-800.png',
'/images/140_getac_publicworks-all_q0a6265_vgps_kv.png',
'/images/2021_b360_4-p-500.png',
'/images/2021_b360_4.png',
'/images/2021_b360_5-p-1080.png',
'/images/2021_b360_5-p-500.png',
'/images/2021_b360_5-p-800.png',
'/images/2021_b360_5.png',
'/images/4-s410red-s_0217-1-p-1080.png',
'/images/4-s410red-s_0217-1-p-500.png',
'/images/4-s410red-s_0217-1-p-800.png',
'/images/4-s410red-s_0217-1.png',
'/images/5-inch-hd-banner-p-1080.jpg',
'/images/5-inch-hd-banner-p-1600.jpg',
'/images/5-inch-hd-banner-p-500.jpg',
'/images/5-inch-hd-banner-p-800.jpg',
'/images/5-inch-hd-banner.jpg',
'/images/a140-20qr-20code-p-1080.png',
'/images/a140-20qr-20code-p-1600.png',
'/images/a140-20qr-20code-p-500.png',
'/images/a140-20qr-20code-p-800.png',
'/images/a140-20qr-20code.png',
'/images/a140g2_01-os-p-1080.png',
'/images/a140g2_01-os-p-500.png',
'/images/a140g2_01-os-p-800.png',
'/images/a140g2_01-os.png',
'/images/a140g2_3.png',
'/images/a140g2_4-p-500.png',
'/images/a140g2_4.png',
'/images/airport-management.jpeg',
'/images/ambulance_critical-awareness.jpeg',
'/images/ambulance_electronic-patient-care-reporting-epcr-1.jpeg',
'/images/ambulance_electronic-patient-care-reporting-epcr.jpeg',
'/images/ambulance_mobilisation.jpeg',
'/images/app-icon.png',
'/images/asset-management_1.jpeg',
'/images/automotive_evhc-1.jpeg',
'/images/automotive_evhc.jpeg',
'/images/automotive_intelligent-planning.jpeg',
'/images/automotive_manufacturing-1-1.jpeg',
'/images/automotive_pc-based-diagnostics.jpeg',
'/images/automotive_rd.jpeg',
'/images/automotive_technical-publications.jpeg',
'/images/b360-20pro-20qr-20code-p-1080.png',
'/images/b360-20pro-20qr-20code-p-1600.png',
'/images/b360-20pro-20qr-20code-p-500.png',
'/images/b360-20pro-20qr-20code-p-800.png',
'/images/b360-20pro-20qr-20code.png',
'/images/b360-20qr-20code-p-1080.png',
'/images/b360-20qr-20code-p-1600.png',
'/images/b360-20qr-20code-p-500.png',
'/images/b360-20qr-20code-p-800.png',
'/images/b360-20qr-20code.png',
'/images/b360-pro_8-p-500.png',
'/images/b360-pro_8.png',
'/images/b360-pro_win10_20210602-p-1080.png',
'/images/b360-pro_win10_20210602-p-500.png',
'/images/b360-pro_win10_20210602-p-800.png',
'/images/b360-pro_win10_20210602.png',
'/images/b360_07_final-os-p-1080.png',
'/images/b360_07_final-os-p-500.png',
'/images/b360_07_final-os-p-800.png',
'/images/b360_07_final-os.png',
'/images/b360_win10_202106-p-1080.png',
'/images/b360_win10_202106-p-500.png',
'/images/b360_win10_202106-p-800.png',
'/images/b360_win10_202106.png',
'/images/bc03-1-1.png',
'/images/bc03-1.png',
'/images/ca-nf42_top_right-1-1-p-500.png',
'/images/ca-nf42_top_right-1-1.png',
'/images/cbrne-scaled-p-1080.jpeg',
'/images/cbrne-scaled-p-1600.jpeg',
'/images/cbrne-scaled-p-2000.jpeg',
'/images/cbrne-scaled-p-500.jpeg',
'/images/cbrne-scaled-p-800.jpeg',
'/images/cbrne-scaled.jpeg',
'/images/command-control-tactical.jpeg',
'/images/contact-2520us.jpeg',
'/images/defense_mission-planning.jpeg',
'/images/defense_platform-maintenance.jpeg',
'/images/defense_tactical-communication.jpeg',
'/images/defense_transportation-tactical-logistics.jpeg',
'/images/deployxpress-features-image_1.jpeg',
'/images/eam-and-cmms-solutions.jpeg',
'/images/f110-20qr-20code-p-1080.png',
'/images/f110-20qr-20code-p-1600.png',
'/images/f110-20qr-20code-p-500.png',
'/images/f110-20qr-20code-p-800.png',
'/images/f110-20qr-20code.png',
'/images/f110-3_0615-s-p-1080.png',
'/images/f110-3_0615-s-p-500.png',
'/images/f110-3_0615-s-p-800.png',
'/images/f110-3_0615-s.png',
'/images/f110-4_0615-s-p-1080.png',
'/images/f110-4_0615-s-p-500.png',
'/images/f110-4_0615-s-p-800.png',
'/images/f110-4_0615-s.png',
'/images/facility-management-compliance-and-inspections.jpeg',
'/images/factory-automation-and-plant-monitoring-1.jpeg',
'/images/factory-automation-and-plant-monitoring.jpeg',
'/images/favicon.png',
'/images/features_scrape_1-25252520-252525281-25252529.jpeg',
'/images/features_scrape_1-25252520-252525282-25252529.jpeg',
'/images/features_scrape_1-25252520-252525283-25252529.jpeg',
'/images/features_scrape_1.jpeg',
'/images/field-data-analysis_1.jpeg',
'/images/fire_ground-management.jpeg',
'/images/fire_incident-planning.jpeg',
'/images/fleet-management-and-maintenance_1.jpeg',
'/images/forestry-gis-mapping-and-surveying.jpeg',
'/images/g410s03-p-1080.png',
'/images/g410s03-p-500.png',
'/images/g410s03-p-800.png',
'/images/g410s03.png',
'/images/gdms_kv-3-p-1080.png',
'/images/gdms_kv-3-p-500.png',
'/images/gdms_kv-3-p-800.png',
'/images/gdms_kv-3.png',
'/images/getac-20s510-20spec-20sheet-20qr-20code-p-1080.png',
'/images/getac-20s510-20spec-20sheet-20qr-20code-p-1600.png',
'/images/getac-20s510-20spec-20sheet-20qr-20code-p-500.png',
'/images/getac-20s510-20spec-20sheet-20qr-20code-p-800.png',
'/images/getac-20s510-20spec-20sheet-20qr-20code.png',
'/images/getac-5-inch-hd-display-3.png',
'/images/getac-barcode-thumbnail.jpeg',
'/images/getac-fixed-lens-3.png',
'/images/getac-s510-scenario-240515-utilities-p-500.jpeg',
'/images/getac-s510-scenario-240515-utilities.jpeg',
'/images/getac-s510-scenario-240517-war-room-usb-c-docking-station-.jpeg',
'/images/getac-s510-scenario-240517-war-room-usb-c-docking-station-p-500.jpeg',
'/images/getac-video-solutions-vr-x20-dvr-1.png',
'/images/getac_bc04_01.png',
'/images/getac_deployxpress_scenario_web-p-500.png',
'/images/getac_deployxpress_scenario_web.png',
'/images/getac_driving-safety_page_us-03.png',
'/images/getac_f110g6_02-2-p-1080.png',
'/images/getac_f110g6_02-2-p-500.png',
'/images/getac_f110g6_02-2-p-800.png',
'/images/getac_f110g6_02-2.png',
'/images/getac_gdms_monitor-p-1080.png',
'/images/getac_gdms_monitor-p-500.png',
'/images/getac_gdms_monitor-p-800.png',
'/images/getac_gdms_monitor.png',
'/images/getac_gdms_page-03.png',
'/images/getac_ux10_scenario_20082501.jpeg',
'/images/getac_ux10g2-r_03-p-1080.png',
'/images/getac_ux10g2-r_03-p-500.png',
'/images/getac_ux10g2-r_03-p-800.png',
'/images/getac_ux10g2-r_03.png',
'/images/getac_x600-20pro_05-2-p-1080.png',
'/images/getac_x600-20pro_05-2-p-500.png',
'/images/getac_x600-20pro_05-2-p-800.png',
'/images/getac_x600-20pro_05-2.png',
'/images/getac_x600-pro_built-for-expansion-p-1080.png',
'/images/getac_x600-pro_built-for-expansion-p-500.png',
'/images/getac_x600-pro_built-for-expansion-p-800.png',
'/images/getac_x600-pro_built-for-expansion.png',
'/images/getac_x600-pro_cutting-edge-performance-p-1080.png',
'/images/getac_x600-pro_cutting-edge-performance-p-500.png',
'/images/getac_x600-pro_cutting-edge-performance-p-800.png',
'/images/getac_x600-pro_cutting-edge-performance.png',
'/images/getac_x600_04-2-20-1-.png',
'/images/getac_x600_04-2-20-1-p-1080.png',
'/images/getac_x600_04-2-20-1-p-500.png',
'/images/getac_x600_04-2-20-1-p-800.png',
'/images/getac_x600_cutting-edge-performance-1-p-1080.png',
'/images/getac_x600_cutting-edge-performance-1-p-500.png',
'/images/getac_x600_cutting-edge-performance-1-p-800.png',
'/images/getac_x600_cutting-edge-performance-1.png',
'/images/getac_x600_scenario_mobility-20-okay-20for-20pr-2c-20social-20marketing-.jpg',
'/images/getac_x600_scenario_mobility-20-okay-20for-20pr-2c-20social-20marketing-p-1080.jpg',
'/images/getac_x600_scenario_mobility-20-okay-20for-20pr-2c-20social-20marketing-p-500.jpg',
'/images/getac_x600_scenario_mobility-20-okay-20for-20pr-2c-20social-20marketing-p-800.jpg',
'/images/getac_zx10_01-2-p-1080.png',
'/images/getac_zx10_01-2-p-500.png',
'/images/getac_zx10_01-2-p-800.png',
'/images/getac_zx10_01-2.png',
'/images/getac_zx10_convenient-versatility-p-1080.png',
'/images/getac_zx10_convenient-versatility-p-500.png',
'/images/getac_zx10_convenient-versatility-p-800.png',
'/images/getac_zx10_convenient-versatility.png',
'/images/getac_zx10_full-shift-reliability-p-1080.png',
'/images/getac_zx10_full-shift-reliability-p-500.png',
'/images/getac_zx10_full-shift-reliability-p-800.png',
'/images/getac_zx10_full-shift-reliability.png',
'/images/getac_zx70_scenario_kv_201216-p-500.png',
'/images/getac_zx70_scenario_kv_201216-p-800.png',
'/images/getac_zx70_scenario_kv_201216.png',
'/images/https___s3.amazonaws.svg',
'/images/in_the_car.jpg',
'/images/infrared-3.png',
'/images/inventory-and-warehouse-management.jpeg',
'/images/k120-20qr-20code-p-1080.png',
'/images/k120-20qr-20code-p-1600.png',
'/images/k120-20qr-20code-p-500.png',
'/images/k120-20qr-20code-p-800.png',
'/images/k120-20qr-20code.png',
'/images/k120g2-r_03-p-1080.png',
'/images/k120g2-r_03-p-500.png',
'/images/k120g2-r_03-p-800.png',
'/images/k120g2-r_03.png',
'/images/keywedge_light.jpeg',
'/images/long-haul-delivery-fleet-management.jpeg',
'/images/lumber-management-timber-cruising.jpeg',
'/images/manufacturing_robotic-control.jpeg',
'/images/manufacturing_workforce-management.jpeg',
'/images/mining-gis-mapping-and-surveying.jpeg',
'/images/mining-safety-inspections_1.jpeg',
'/images/mobile-gis-surveying-and-mapping.jpeg',
'/images/oil-gas_remote-support.jpeg',
'/images/on-site-safety-1.jpeg',
'/images/on-site-safety.jpeg',
'/images/patrol-critical-awareness.jpeg',
'/images/picture1-1-1-p-500.jpeg',
'/images/picture1-1-1.jpeg',
'/images/police-all-new.jpeg',
'/images/police_record-management-and-dispatch.jpeg',
'/images/port-management-1.jpeg',
'/images/port-management.jpeg',
'/images/product_page___solutions__2007312401.png',
'/images/railroad-management.jpeg',
'/images/rugged-20s510-20laptop_01-p-500.png',
'/images/rugged-20s510-20laptop_01.png',
'/images/s410-20qr-20code-p-1080.png',
'/images/s410-20qr-20code-p-1600.png',
'/images/s410-20qr-20code-p-500.png',
'/images/s410-20qr-20code-p-800.png',
'/images/s410-20qr-20code.png',
'/images/s410_win10_2019-4-p-1080.png',
'/images/s410_win10_2019-4-p-500.png',
'/images/s410_win10_2019-4-p-800.png',
'/images/s410_win10_2019-4.png',
'/images/s410g5-police-patrol.jpeg',
'/images/screenshot-202024-10-09-20at-2012.28.49-e2-80-afpm-p-500.png',
'/images/screenshot-202024-10-09-20at-2012.28.49-e2-80-afpm-p-800.png',
'/images/screenshot-202024-10-09-20at-2012.28.49-e2-80-afpm.png',
'/images/screenshot-202024-10-09-20at-2012.29.14-e2-80-afpm-p-500.png',
'/images/screenshot-202024-10-09-20at-2012.29.14-e2-80-afpm-p-800.png',
'/images/screenshot-202024-10-09-20at-2012.29.14-e2-80-afpm.png',
'/images/smart-meter-reading-and-installation.jpeg',
'/images/t800-20qr-20code-p-1080.png',
'/images/t800-20qr-20code-p-1600.png',
'/images/t800-20qr-20code-p-500.png',
'/images/t800-20qr-20code-p-800.png',
'/images/t800-20qr-20code.png',
'/images/t800_lasting-power-p-500.png',
'/images/t800_lasting-power.png',
'/images/t800_one-handed-comfort.png',
'/images/t800_win10_2021-2-p-1080.png',
'/images/t800_win10_2021-2-p-500.png',
'/images/t800_win10_2021-2-p-800.png',
'/images/t800_win10_2021-2.png',
'/images/utilities-transmission-distribution-utilities-page.jpeg',
'/images/utilities-vegitation-management-utilities-page.jpeg',
'/images/utilities_asset-management.jpeg',
'/images/utilities_workforce-management.jpeg',
'/images/ux10-20qr-20code-p-1080.png',
'/images/ux10-20qr-20code-p-1600.png',
'/images/ux10-20qr-20code-p-500.png',
'/images/ux10-20qr-20code-p-800.png',
'/images/ux10-20qr-20code.png',
'/images/v110-20qr-20code-p-1080.png',
'/images/v110-20qr-20code-p-1600.png',
'/images/v110-20qr-20code-p-500.png',
'/images/v110-20qr-20code-p-800.png',
'/images/v110-20qr-20code.png',
'/images/v110_lumibondnew-p-500.png',
'/images/v110_lumibondnew.png',
'/images/v110_win10_2021-2-p-1080.png',
'/images/v110_win10_2021-2-p-500.png',
'/images/v110_win10_2021-2-p-800.png',
'/images/v110_win10_2021-2.png',
'/images/v110g5_exploded-view-drawing-p-500.png',
'/images/v110g5_exploded-view-drawing.png',
'/images/vgps_icon1.png',
'/images/vgps_icon2-1.png',
'/images/vr-x20g3_01-p-500.png',
'/images/vr-x20g3_01.png',
'/images/warehouse-materials-handling.jpeg',
'/images/webflow-badge-icon-d2.89e12c322e.svg',
'/images/webflow-badge-text-d2.c82cec3b78.svg',
'/images/workplace-safety_1.jpeg',
'/images/x600-20pro-20qr-20code-p-1080.png',
'/images/x600-20pro-20qr-20code-p-1600.png',
'/images/x600-20pro-20qr-20code-p-500.png',
'/images/x600-20pro-20qr-20code-p-800.png',
'/images/x600-20pro-20qr-20code.png',
'/images/x600-20qr-20code-p-1080.png',
'/images/x600-20qr-20code-p-1600.png',
'/images/x600-20qr-20code-p-500.png',
'/images/x600-20qr-20code-p-800.png',
'/images/x600-20qr-20code.png',
'/images/zx10-20qr-20code-p-1080.png',
'/images/zx10-20qr-20code-p-1600.png',
'/images/zx10-20qr-20code-p-500.png',
'/images/zx10-20qr-20code-p-800.png',
'/images/zx10-20qr-20code.png',
'/images/zx70_android-9_202005-1_driving-safety-p-1080.png',
'/images/zx70_android-9_202005-1_driving-safety-p-500.png',
'/images/zx70_android-9_202005-1_driving-safety-p-800.png',
'/images/zx70_android-9_202005-1_driving-safety.png',
'/images/zx70_android10_02_800-p-500.png',
'/images/zx70_android10_02_800.png',
'/images/zx80-20qr-20code-p-1080.png',
'/images/zx80-20qr-20code-p-1600.png',
'/images/zx80-20qr-20code-p-500.png',
'/images/zx80-20qr-20code-p-800.png',
'/images/zx80-20qr-20code.png',
'/images/zx80-feature-image-02-1-p-500.png',
'/images/zx80-feature-image-02-1.png',
'/images/zx80-feature-image-03-1-p-500.png',
'/images/zx80-feature-image-03-1.png',
'/images/zx80-slider01.png',
'/industries/air-force.html',
'/industries/army.html',
'/industries/automotive.html',
'/industries/ems.html',
'/industries/fire-rescue.html',
'/industries/law-enforcement.html',
'/industries/manufacturing-warehouse.html',
'/industries/marines.html',
'/industries/natural-resources.html',
'/industries/navy.html',
'/industries/oil-gas.html',
'/industries/transportation-logistics.html',
'/industries/utilities.html',
'/industry-categories/defense.html',
'/industry-categories/enterprise.html',
'/industry-categories/public-safety.html',
'/industry-categories/utilities.html',
'/industry-categories/video-solutions-public-sector.html',
'/js/getac.8d78b86a9.js',
'/js/jquery.js',
'/product-categories/laptops.html',
'/product-categories/software.html',
'/product-categories/tablets.html',
'/product-categories/video-solutions.html',
'/products/a140.html',
'/products/b360-pro.html',
'/products/b360.html',
'/products/f110.html',
'/products/getac-deployxpress.html',
'/products/getac-device-monitoring-system-gdms.html',
'/products/getac-driving-safety-utility.html',
'/products/getac-keywedge-barcode-reader-utility.html',
'/products/getac-virtual-gps-utility.html',
'/products/k120.html',
'/products/s410.html',
'/products/s510.html',
'/products/t800.html',
'/products/ux10.html',
'/products/v110.html',
'/products/x600-pro.html',
'/products/x600.html',
'/products/zx10.html',
'/products/zx80.html',
'/videos/getac-keywedge-barcode-reader-utility-edited.html'
]

// Open cache on install.
self.addEventListener('install', event => {
  event.waitUntil(async function () {
    const cache = await caches.open(CACHE_NAME)

    await cache.addAll(CACHED_URLS)
  }())
})

// Cache and update with stale-while-revalidate policy.
self.addEventListener('fetch', event => {
  const { request } = event

  // Prevent Chrome Developer Tools error:
  // Failed to execute 'fetch' on 'ServiceWorkerGlobalScope': 'only-if-cached' can be set only with 'same-origin' mode
  //
  // See also https://stackoverflow.com/a/49719964/1217468
  if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') {
    return
  }

  event.respondWith(async function () {
    const cache = await caches.open(CACHE_NAME)

    const cachedResponsePromise = await cache.match(request)
    const networkResponsePromise = fetch(request)

    if (request.url.startsWith(self.location.origin)) {
      event.waitUntil(async function () {
        const networkResponse = await networkResponsePromise

        await cache.put(request, networkResponse.clone())
      }())
    }

    return cachedResponsePromise || networkResponsePromise
  }())
})

// Clean up caches other than current.
self.addEventListener('activate', event => {
  event.waitUntil(async function () {
    const cacheNames = await caches.keys()

    await Promise.all(
      cacheNames.filter((cacheName) => {
        const deleteThisCache = cacheName !== CACHE_NAME

        return deleteThisCache
      }).map(cacheName => caches.delete(cacheName))
    )
  }())
})

// Open cache on install with error logging
self.addEventListener('install', event => {
  event.waitUntil(async function () {
    const cache = await caches.open(CACHE_NAME)

    try {
      await cache.addAll(CACHED_URLS)
    } catch (error) {
      console.error('Failed to cache resources:', error)
    }
  }())
})
