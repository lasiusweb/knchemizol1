import React, { useMemo } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { AlertTriangle, CheckCircle, Clock, XCircle, Info } from 'lucide-react';
import { equipmentList } from '../services/mockData';
import { EquipmentStatus } from '../types';

const LabCapabilities: React.FC = () => {
  const stats = useMemo(() => {
    const total = equipmentList.length;
    const operational = equipmentList.filter(e => e.status === EquipmentStatus.OPERATIONAL).length;
    const calibrationDue = equipmentList.filter(e => e.status === EquipmentStatus.CALIBRATION_DUE).length;
    const maintenance = equipmentList.filter(e => e.status === EquipmentStatus.MAINTENANCE).length;
    const offline = equipmentList.filter(e => e.status === EquipmentStatus.OFFLINE).length;
    
    return { total, operational, calibrationDue, maintenance, offline };
  }, []);

  const chartData = [
    { name: 'Operational', value: stats.operational, color: '#10b981' },
    { name: 'Calibration Due', value: stats.calibrationDue, color: '#f59e0b' },
    { name: 'Maintenance', value: stats.maintenance, color: '#ef4444' },
    { name: 'Offline', value: stats.offline, color: '#64748b' },
  ].filter(d => d.value > 0);

  const getStatusBadge = (status: EquipmentStatus) => {
    switch(status) {
      case EquipmentStatus.OPERATIONAL:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" /> Operational</span>;
      case EquipmentStatus.CALIBRATION_DUE:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800"><Clock className="w-3 h-3 mr-1" /> Calibration Due</span>;
      case EquipmentStatus.MAINTENANCE:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><AlertTriangle className="w-3 h-3 mr-1" /> Maintenance</span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800"><XCircle className="w-3 h-3 mr-1" /> Offline</span>;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Lab Capabilities Dashboard</h1>
          <p className="mt-2 text-slate-600">
            Real-time transparency into our analytical infrastructure. We believe in proving our claims.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Chart Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 lg:col-span-1">
            <h3 className="text-lg font-medium text-slate-900 mb-4">Equipment Status Overview</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <span className="text-3xl font-bold text-slate-900">{Math.round((stats.operational / stats.total) * 100)}%</span>
              <span className="text-sm text-slate-500 ml-2">Operational Capacity</span>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 lg:col-span-2 flex flex-col justify-center">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Transparency Commitment:</strong> Items marked as "Operational" have a valid calibration certificate available for download. "Calibration Due" instruments are currently being scheduled for third-party verification.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                 <p className="text-sm font-medium text-slate-500">Total Instruments</p>
                 <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
               </div>
               <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                 <p className="text-sm font-medium text-green-600">Testing Available</p>
                 <p className="text-2xl font-bold text-green-700">{stats.operational}</p>
               </div>
               <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                 <p className="text-sm font-medium text-amber-600">Pending Service</p>
                 <p className="text-2xl font-bold text-amber-700">{stats.calibrationDue + stats.maintenance}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-white shadow-sm rounded-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h3 className="text-lg font-medium text-slate-900">Detailed Equipment List</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Instrument Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Accuracy</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Last Cal.</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Next Due</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {equipmentList.map((eq) => (
                  <tr key={eq.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{eq.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{eq.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{getStatusBadge(eq.status)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{eq.accuracy}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{eq.lastCalibration}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{eq.nextCalibration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LabCapabilities;