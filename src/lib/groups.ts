import { SettingsCategory } from './types';

export const SETTINGS_CATEGORIES: SettingsCategory[] = [
  {
    name: 'Space Heating/Cooling',
    groups: [
      {
        name: 'Room Antifrost',
        fields: ['2-05', '2-06','E-0D'],
      },
      {
        name: 'Temperature Range',
        fields: ['3-06', '3-07', '3-08', '3-09'],
      },
      {
        name: 'Sensor calibration',
        fields: ['2-09', '2-0A','2-0B','1-0A'],
      },
      {
        name: 'Comfort setpoint',
        fields: ['9-0A', '9-0B'],
      },
            {
        name: 'Operation Range',
        fields: ['4-02', 'F-01'],
      },
      {
        name: 'System',
        fields: ['7-02', 'E-02','2-06','E-0D','3-0A'],
      },
      {
        name: 'Performance',
        fields: ['D-03', '9-04'],
      },
      {
        name: 'Pump Settings',
        fields: ['F-0D','9-0D','F-00'],
      },
      {
        name: 'Heating-Cooling Switchover',
        fields: ['4-0B','4-0D'],
      },
    ],
  },
  {
    name: 'Main Zone',
    groups: [
      {
        name: 'Heating WD curve',
        fields: ['1-00','1-01','1-02','1-03'],
      },
      {
        name: 'Cooling WD curve',
        fields: ['1-06','1-07','1-04','1-05','1-08','1-09'],
      },
      {
        name: 'Control',
        fields: ['2-0C', 'C-07','C-05'],
      },
      {
        name: 'Setpoint Range',
        fields: ['9-01', '9-00','9-03','9-02'],
      },
      {
        name: 'Delta T',
        fields: ['1-0B', '1-0D'],
      },
      {
        name: 'Modulation',
        fields: ['8-05', '8-06'],
      },
      {
        name: 'Shut-off valve',
        fields: ['F-0B', 'F-0C'],
      },
    ],
  },
  {
    name: 'Additional Zone',
    groups: [
      {
        name: 'Heating WD curve',
        fields: ['0-00','0-01','0-02','0-03'],
      },
      {
        name: 'Cooling WD curve',
        fields: ['0-06','0-07','0-04','0-05','0-08'],
      },
      {
        name: 'Control',
        fields: ['2-0D', 'C-06','7-02'],
      },
      {
        name: 'Setpoint Range',
        fields: ['9-05', '9-06','9-07','9-08'],
      },
      {
        name: 'Delta T',
        fields: ['1-0C', '1-0E'],
      }
    ],
  },
  {
    name: 'Tank',
    groups: [
      {
        name: 'Setpoints',
        fields: ['6-0A', '6-0B','6-0C','6-0D'],
      },
      {
        name: 'Disinfection',
        fields: ['2-01', '2-00','2-02','2-03','2-04'],
      },
      {
        name: 'Heating',
        fields: ['6-0E', '6-00','6-08','6-01','E-05','E-06','E-07'],
      },
      {
        name: 'WD Curve',
        fields: ['0-0B','0-0C','0-0D','0-0E'],
      },
    ],
  },
  {
    name: 'Emergency & Backup assistance',
    groups: [
      {
        name: 'Backup Heater (System)',
        fields: ['4-00','4-02','4-06','4-0A','5-00','5-0D'],
      },
      {
        name: 'Room Heating assistance',
        fields: ['5-00','5-01','5-02','5-03'],
      },
      {
        name: 'DHW Heating assistance',
        fields: ['5-04'],
      },
      {
        name: 'Booster Heater (Tank)',
        fields: ['4-03'],
      },
      {
        name: 'Recovery',
        fields: ['3-00'],
      },
       {
        name: 'Electricity Priority',
        fields: ['4-01'],
      },
    ],
  },
  {
    name: 'Bivalent',
    groups: [
      {
        name: 'Bivalence Settings',
        fields: ['C-02'],
      },
    ],
  },
  {
    name: 'System Environment',
    groups: [
      {
        name: 'Antifreeze',
        fields: ['4-04'],
      },
    ],
  },
  {
    name: 'Electricity Consumption',
    groups: [
      {
        name: 'Restrict power consumption',
        fields: ['2-0E','4-08','4-09'],
      },
      {
        name: 'DI* requested limits ',
        fields: ['5-05','5-06','5-07','5-08','5-09','5-0A','5-0B','5-0C'],
      },
    ],
  },
];